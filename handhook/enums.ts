/**
 * 枚举
 */

 enum Response {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response): void {
    // ...
}

respond("Princess Caroline", Response.Yes)


enum E {
    Foo,
    Bar,
}

function f(x: E) {
    if (x !== E.Foo || x !== E.Bar) {
        //             ~~~~~~~~~~~
        // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
    }
}

export {}