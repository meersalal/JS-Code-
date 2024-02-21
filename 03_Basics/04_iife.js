
// iife function syntax  =>   (function)(execution);


//  named iife function
(function DB() {
    console.log(`DB is Connected`); 
}) ();

((name) => {
    console.log(`DB is Connected two ${name}`);
})('Meer')

