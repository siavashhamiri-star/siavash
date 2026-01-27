import { EventEmitter } from 'events';

// Use a global event emitter to propagate errors to a listener component.
// This allows central handling of specific errors, like Firestore permission errors,
// to provide a better development experience.
export const errorEmitter = new EventEmitter();
