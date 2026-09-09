//Now first thing why we are create this file  . Because jab bhi hum code lhikte h to errors to aye ge hi to un error ko easyly samjne ke liye or jaldi solve karne ke liye hum pane hi errors bana lete h jasie console.log(error ) to ye error de deta or bhi throw jaise build in methods or function h lakin hum isme apne khud ke error bana lete h 

// class me hum `Error` parent class ki property or methods ko use karne ke liye Error ko extend kar rhe h is liye "extend keyword a use hua h  Error ek built in class h node ki ".

// stack kya h -> jab bhi hume ye pata rhe ki error kha h like line/column number, function name,file paths or name .

// what is this.data -> aswer => //this.data is a custom property added by the developer to attach additional context, such as validation details or debug information, to the error instance.  It is not a built-in property of the standard Error class; 

class ApiError extends Error {    


    constructor( statusCode,
        message="Something went wrong",
         errors = [], 
         stack ="" 
         ){

            super(message) 
            this.statusCode = statusCode
            this.data = null  
            this.message = message
            this.success = false
            this.errors = errors
    
            //  ye hum  if -else isliye lhik rhe h , jab code ki line bhut jada ho jaye to hume bata de ki error kha h or wagera wagera errors ke liye h or ye production ke liye 

            if(stack){
                this.stack = stack
            } else{
                Error.captureStackTrace(this, this,constructor)
            }

    }

}

export default ApiError