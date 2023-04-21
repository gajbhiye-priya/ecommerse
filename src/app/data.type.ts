export interface signUp{

    fullName:string,
    contactNumber:string,
    email:string,
    password:string
} 

export interface login{
    email:string,
    password:string
} 

export interface productObject{
   productName: string,
    price: string,
    ProductCategory: string,
    description: string,
    imageUrl: string,
    id:number
}

export interface cart{
    productName: string,
     price: string,
     ProductCategory: string,
     description: string,
     imageUrl: string,
     cartid:number,
     quantity:number,
     productId:number,
     userId:number
 }