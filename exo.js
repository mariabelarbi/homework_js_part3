const  compare =(obj1,obj2)=>  
Object.keys(obj2).every(key=>obj1.hasOwnProperty(key)&&obj1[key]===obj2[key]);/**on vérifie à l'aide de la méthode keys qui retourne 
les noms des propriétés de l'objet  et la méthode every.hasownproperty qui vérifie si l'objet a la propriété 
retournée dans le key ainsi que la cdt qui vérifie l'égalité des deux objets  **/

// exemple

console.log(compare({x:2,y:3,z:"maria"},{y:3,z:"maria"}));
//fonction 
var x=[];
var k=0;
/*const commun=(arr1,arr2)=> {
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i]==arr2[j])
        {
        x[k]=arr1[i];
        k++

        }

        
    } 
}return x; }*/

const diff=(arr,arra)=>{
        arr.forEach(element => {arra.forEach(elt =>{
            if (elt==element)
            {x[k]=elt;
            k++;}
        });
            
        });
        return x;
    }
    

console.log(diff([1, 2, 3], [100, 2, 1, 10]));


