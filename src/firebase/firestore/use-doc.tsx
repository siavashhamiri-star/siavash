'use client';
import { useEffect, useState } from 'react';
import {
  onSnapshot,
  type DocumentData,
  type DocumentReference,
} from 'firebase/firestore';

export function useDoc(ref: DocumentReference | undefined) {
  const [data, setData] = useState<DocumentData>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!ref) {
      setLoading(false);
      return;
    }
    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = {
            ...snapshot.data(),
            id: snapshot.id,
          };
          setData(data);
        }
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [ref]);

  return { data, error, loading };
}
