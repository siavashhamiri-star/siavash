'use client';

// Defines the shape of the context for a Firestore security rule violation.
// This context is used to construct a detailed error message for debugging.
export type SecurityRuleContext = {
  path: string;
  operation: 'get' | 'list' | 'create' | 'update' | 'delete' | 'write';
  requestResourceData?: any;
};

const FIRESTORE_PERMISSION_ERROR_NAME = 'FirestorePermissionError';

/**
 * A custom error class for Firestore permission errors.
 * It formats the error message to be easily readable and provides
 * rich context for debugging security rule violations during development.
 */
export class FirestorePermissionError extends Error {
  public context: SecurityRuleContext;

  constructor(context: SecurityRuleContext) {
    const message = `FirestoreError: Missing or insufficient permissions: The following request was denied by Firestore Security Rules:\n${JSON.stringify(
      { ...context },
      null,
      2
    )}`;
    super(message);
    this.name = FIRESTORE_PERMISSION_ERROR_NAME;
    this.context = context;
  }
}
