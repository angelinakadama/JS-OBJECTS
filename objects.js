//following statement would create the object called ContactsId
 let contactId=class{
constructor (First_name,Second_name,Phonenumber,emailAddress){
 this.First_name=First_name;
 this.Second_name=Second_name;
 this.Phonenumber=Phonenumber;
 this.emailAddress=emailAddress;

}
};
console.log("contactId");
//output:"contactId"

let Address=class{
	constructor(street,city,country){
	 this.street=street;
	 this.city=city;
	 this.country=country;
	}
};
console.log("Address")
//output:"Address"

//public helps to call variables inside and outside the module
public setContactId(String input){
        this.First_name = input;
        this.Second_name= input;
        this.Phonenumber= input;
        this.emailAddress=input;
    }
    public String getContactId(){
        return First_name;
        return Second_name;
        return Phonenumber;
        return emailAddress;
    }console.log("ContactsId")

public setAddress(String input){
        this.street = input;
        this .city  = input;
        this .country= input;
    }
    public String getAddress(){
        return street;
        return city;
        return country;

    }console.log("Address")





