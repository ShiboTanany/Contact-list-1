function activeAdd(){
    
    
}
var i=0;
var click=0;
var sh;
var up=0;



function Contact(first, middle, last, age, gender, phone) { //it is about constructor od class Contract 
    this.name = {first, middle, last};//object name 
    this.age = age;
    this.gender = gender;
    this.phone = phone;
    this.getName = function () {
        
        return this.name.first+""+this.name.middle+""+this.name.last;            //returing full name 
    };
    this.toJson = function () {
        return "{\"first\":\"" + this.name.first + "\",\"middle\":\"" + this.name.middle + "\",\"last\":\"" + this.name.last
                + "\",\"age\":\"" + this.age + "\",\"gender\":\"" + this.gender + "\",\"phone\":\"" + this.phone + "\"}";
    };
}



Contact.prototype.toString = function ()
{
    return "{\"first\":\"" + this.name.first + "\",\"middle\":\"" + this.name.middle + "\",\"last\":\"" + this.name.last
            + "\",\"age\":\"" + this.age + "\",\"gender\":\"" + this.gender + "\",\"phone\":\"" + this.phone + "\"}";
};


function ContactDetails(first, middle, last, age, gender, phone, email, fax, address) {
    
    Contact.call(this, first, middle, last, age, gender, phone);
    this.email = email;
    this.fax = fax;
    this.address = address;
    this.getName = function () {
        
        return this.name.first+""+this.name.middle+""+this.name.last;            //returing full name 
    };
    
    this.toJson = function () {
        return "{\"first\":\"" + this.name.first + "\",\"middle\":\"" + this.name.middle + "\",\"last\":\"" + this.name.last
                + "\",\"age\":\"" + this.age + "\",\"gender\":\"" + this.gender + "\",\"phone\":\"" + this.phone +
                "\",\"email\":\"" + this.email + "\",\"fax\":\"" + this.fax + "\",\"address\":\"" + this.address + "\"}";
    };
}
//apply inheritance here
ContactDetails.prototype = Object.create(Contact.prototype);

ContactDetails.prototype.toString = function ()
{
    return "{\"first\":\"" + this.name.first + "\",\"middle\":\"" + this.name.middle + "\",\"last\":\"" + this.name.last
            + "\",\"age\":\"" + this.age + "\",\"gender\":\"" + this.gender + "\",\"phone\":\"" + this.phone +
            "\",\"email\":\"" + this.email + "\",\"fax\":\"" + this.fax + "\",\"address\":\"" + this.address + "\"}";
};

function ContactService() {

    this.getContactList = function () {
        
        // access the local storage and get the list of contacts saved there 
        //return array of contactdetails 
    };

    this.addToContactList = function () {
        // 1- validating add contact from
         var fname=document.getElementById("fname").value;
        var mname=document.getElementById("mname").value;
        var lname=document.getElementById("lname").value;
        var age=document.getElementById("age").value;
        var gender=document.getElementById("gender").value;
        var phone= document.getElementById("phone").value;
        var email= document.getElementById("email").value;
        var fax= document.getElementById("fax").value;
        var address=document.getElementById("address").value;
        x= new  ContactDetails(fname, mname, lname, age, gender, phone, email, fax, address);
        if(up==1){
        localStorage.removeItem(sh, x);
      //  alert("old");
        up=1;
        
      
      
      
      }
      if(up!=1) {
    
       var date=new Date();
      var key="obj$"+date.getTime();
      localStorage.setItem(key, x);
      //alert("new");
        
      }
       //contactService.addContactView();
       // document.getElementById("viewContact").style.display="block";
      
        
        
        // 2- get the data from form and construct object from ContactDetails
       /* */
        // 3- check if the you came from update existing contact or add new contact 
        // 4- if you add new one add generate key for this new one and save it into localstorage
        // 5- if you update existing one, you should update this contact in the list view and also in the local storage
        // 6- then change the view to the list view
        
    };

    this.clearContactList = function () {
	localStorage.clear();
      /* for(var i=0, len=localStorage.length; i<len; i++) {
        key = localStorage.key(i);
       
        localStorage.removeItem(key);
        
       }*/
    };

    this.deleteContact = function (key) {
        
    };

    this.addContactToDOM = function (key, contactDetails) {
       
    };

    this.addContactView = function () {
        document.getElementById("add").style.display="block";
    document.getElementById("viewList").style.display="none";
    };
this.viewshibo=function(){
  
  //  
    
    
    document.getElementById("viewContact").style.display="block";
    document.getElementById("viewList").style.display="none";
    document.getElementById("add").style.display="none";
    
};
    this.cancelAddContactView = function () {
        document.getElementById("fname").value="";
        document.getElementById("mname").value="";
        document.getElementById("lname").value="";
        document.getElementById("age").value="";
        document.getElementById("phone").value="";
        document.getElementById("email").value="";
        document.getElementById("fax").value="";
        document.getElementById("address").value="";
        document.getElementById("add").style.display="none";
        document.getElementById("viewList").style.display="block";
        //reset form data 
        //switch to list view 
    };

    this.init = function () {
     
    };

    this.removeContactFromDOM = function (key) {
        // remove an item from dom by this key 
    };
// this.viewContactItem = function (key) 
    this.viewContactItem = function () {
        //var key;
        var list = document.getElementById('contactList');
         document.getElementById("add").style.display="none";
        document.getElementById("viewList").style.display="block";
       obj= new  ContactDetails();
        var entry = document.createElement('li');
        
        for(var i=0, len=localStorage.length; i<len; i++) {
         key = localStorage.key(i);
        var value = localStorage[key];
    var arr=value.split(",");

         p=document.getElementById("contactList");
            p.innerHTML=p.innerHTML+'<li>\
                    <div  class="user-avatar">\
                    <a href="#">\
                    <img src="assets/images/avatars/4.jpg" width="48" alt="Profile of Owen Christians" />\
                    </a>\
                    </div>\
                    <p  class="user-name">\
                    <a href="javascript:showPerson(\''+key+'\')" onclick="">'+arr[0].split(':')[1].replace(/["']/g, "")+'</a>\
                    <span>'+arr[5].split(':')[1].replace(/["']/g, "")+'</span>\
                    </p>\
                    <a class="delete" href="javascript:delOne(\''+key+'\')"><i class="fa fa-close"></i></a>\
                    </li>';}
             };
            
        

   
}




var contactService = new ContactService();
window.onload = contactService.init;
function rese(){ contactService.cancelAddContactView();}
   
function activeAdd(){
    
    contactService.addContactView();
}
function add(){
    
    contactService.addToContactList ();
    var myNode = document.getElementById("contactList");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
     contactService.viewContactItem();
}
function del(){
   
    contactService.clearContactList();
     var myNode = document.getElementById("contactList");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
    contactService.viewContactItem();
    
    
}
function showPerson(o){
  
    ob=localStorage.getItem(o);


    arr=ob.split(":");
   
    
    document.getElementById("viewContact").style.display="block";
    document.getElementById("viewList").style.display="none";
    document.getElementById("add").style.display="none";
    //document.getElementById("age").text='22';
    var string = arr[1].split(",")[0]+''; // just an example
    name=string.replace(/["']/g, "");
    
   // name=string.replace(/"$/, '');
    document.getElementById("phone2").innerHTML=arr[6].split(",")[0].replace(/["']/g, "");
    document.getElementById("name").innerHTML=name;
    document.getElementById("gender2").innerHTML=arr[5].split(",")[0].replace(/["']/g, "");
    document.getElementById("email2").innerHTML=arr[7].split(",")[0].replace(/["']/g, "");
    document.getElementById("fax2").innerHTML=arr[8].split(",")[0].replace(/["']/g, "");
    document.getElementById("address2").innerHTML=arr[9].split(",")[0].replace(/["'{}]/g, "");
    document.getElementById("age2").innerHTML=arr[4].split(",")[0].replace(/["']/g, "");
    document.getElementById("key").value=o;
    sh=document.getElementById("key").value;
   
                  
    
    
}
function ret(){
     document.getElementById("viewContact").style.display="none";
     document.getElementById("viewList").style.display="block";
    
}
function delOne(oj){
    
     localStorage.removeItem(oj);
     
     document.getElementById("viewList").style.display="none";
     document.getElementById("viewContact").style.display="none";
     //document.getElementById("viewList").style.display="block";
     var myNode = document.getElementById("contactList");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
    contactService.viewContactItem();
    // contactService.viewContactItem();
}

function de(){
    delOne(sh);  
}
function upd(){
   up=1;
   document.getElementById("add").style.display="block";
    document.getElementById("viewList").style.display="none";
    document.getElementById("viewContact").style.display="none";
     localStorage.getItem(sh);
     arr=ob.split(":");
    document.getElementById("fname").value=arr[1].split(",")[0].replace(/["']/g, "");
    document.getElementById("mname").value=arr[2].split(",")[0].replace(/["']/g, "");
    document.getElementById("lname").value=arr[3].split(",")[0].replace(/["']/g, "");
    document.getElementById("age").value=arr[4].split(",")[0].replace(/["']/g, "");
    document.getElementById("phone").value=arr[6].split(",")[0].replace(/["']/g, "");
    document.getElementById("email").value=arr[7].split(",")[0].replace(/["']/g, "");
    document.getElementById("fax").value=arr[8].split(",")[0].replace(/["']/g, "");
    document.getElementById("address").value=arr[9].split(",")[0].replace(/["'{}]/g, "");
    //alert(up);
   contactService.addToContactList ();
    /*var myNode = document.getElementById("contactList");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}*/
    up=0;
    /*document.getElementById("viewContact").style.display="none";
    document.getElementById("viewList").style.display="block";
    document.getElementById("add").style.display="none";
    // contactService.viewContactItem();*/
    
   /* contactService.addContactView();
   
    var myNode = document.getElementById("contactList");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}*/
    // contactService.viewContactItem();
    
}
