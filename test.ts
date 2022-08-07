const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const num: number = 3e10

const message: string = 'Hello'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'Typescript']


//Tuple

const contact: [string, number] = ['Vladilen', 1223344]


//Any

let variable: any = 42
variable = 'New string'


//=====

function sayMyName (name: string): void {
   console.log(name)
}

sayMyName('Hazenberg')


// never

function throwError (message: string): never {
   throw new Error(message)
}

function infinite(): never {
   while (true){

   }
}


// Type

type Login = string

const login: Login = 'admin'

// const login2: Login = 2

type ID = string | number
const id1: ID = 1234
const id2: ID = 'Hello'
const id3: ID = true

type SomeType = string | null | undefined 



// interfaces

interface Rect {
   readonly id: string
   color?: string
   size: {
      width: number
      height: number
   }
}

const rect1: Rect = {
   id: '12234',
   size: {
      width: 20,
      height: 30
   },
   color: '#0000'
}

const rect2: Rect = {
   id: '122344332',
   size: {
      width: 10,
      height: 5
   }
}

rect2.color = 'blank'

const rect3 = {} as Rect 


