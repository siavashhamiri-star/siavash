'use client';
import { useEffect, useState } from 'react';
import {
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
  limit,
  startAt,
  startAfter,
  endAt,
  endBefore,
  doc,
  getDocs,
  getDoc,
  type DocumentData,
  type Query,
  type CollectionReference,
} from 'firebase/firestore';

type QueryOptions = {
  where?: [string, any, any] | [string, any, any][];
  orderBy?: [string, 'asc' | 'desc'] | [string, 'asc' | 'desc'][];
  limit?: number;
  startAt?: any;
  startAfter?: any;
  endAt?: any;
  endBefore?: any;
};

export function useCollection(
  ref: CollectionReference | undefined,
  options?: QueryOptions
) {
  const [data, setData] = useState<DocumentData[]>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!ref) {
      setLoading(false);
      return;
    }
    let q: Query;
    if (options) {
      let whereConstraints: any[] = [];
      if (options.where) {
        if (typeof options.where[0] === 'string') {
          whereConstraints = [where(options.where[0], options.where[1], options.where[2])];
        } else {
          whereConstraints = options.where.map((w) => where(w[0], w[1], w[2]));
        }
      }

      let orderByConstraints: any[] = [];
      if (options.orderBy) {
        if (typeof options.orderBy[0] === 'string') {
          orderByConstraints = [orderBy(options.orderBy[0], options.orderBy[1])];
        } else {
          orderByConstraints = options.orderBy.map((o) => orderBy(o[0], o[1]));
        }
      }

      let limitConstraint: any[] = [];
      if (options.limit) {
        limitConstraint = [limit(options.limit)];
      }

      let startAtConstraint: any[] = [];
      if (options.startAt) {
        startAtConstraint = [startAt(options.startAt)];
      }

      let startAfterConstraint: any[] = [];
      if (options.startAfter) {
        startAfterConstraint = [startAfter(options.startAfter)];
      }

      let endAtConstraint: any[] = [];
      if (options.endAt) {
        endAtConstraint = [endAt(options.endAt)];
      }

      let endBeforeConstraint: any[] = [];
      if (options.endBefore) {
        endBeforeConstraint = [endBefore(options.endBefore)];
      }

      q = query(
        ref,
        ...whereConstraints,
        ...orderByConstraints,
        ...limitConstraint,
        ...startAtConstraint,
        ...startAfterConstraint,
        ...endAtConstraint,
        ...endBeforeConstraint
      );
    } else {
      q = ref;
    }

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(data);
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [ref, options]);

  return { data, error, loading };
}
