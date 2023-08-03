import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');

  setTimeout(() => {
    subscriber.next('Charlie');
    // Complete notification of the observable
    // subscriber.complete();
  }, 2000);

  setTimeout(() => {
    subscriber.error(new Error('Error has occurred'));
  }, 4000);

  // Teardown logic after completion
  return () => {
    console.log('Teardown');
  };
});

console.log('Before subscribe');
observable$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(err.message),
  complete: () => console.log('Completed'),
});
console.log('After subscribe');
