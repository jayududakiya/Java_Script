"use strict"
{
    // New Map() use 
    
    /*
        new Map()	Creates a new Map
        set()	Sets the value for a key in a Map
        get()	Gets the value for a key in a Map
        delete()	Removes a Map element specified by the key
        has()	Returns true if a key exists in a Map
        entries()	Returns an iterator with the [key, value] pairs in a Map
                     Property	Description
        size	Returns the number of elements in a Map
        clear() this Method is remove all Map Key and Value and done empty map
        value()   value is only show maps value 
        key()     key is only show maps  key 
             
    */ 

        {
            // using  get() 
        
           const maps = new Map ([
            ["option-1",20],  // this number(integer) value 
            ["option-2",30],  // this number(integer) value 
            ["option-3",40],  // this number(integer) value 
            ["option-4","hello"]  // this number(string) value 
            ])
        
            maps.set("option-5" , "hello"); // for add new  key and value  in map
        
            console.log(maps.get("option-5"));
            console.log(maps);
        }


        {
            // set() using    
           const maps_1 = new Map ([
            ["option-1",20],
            ["option-2",30],
            ["option-3","hello=3"],  // this string value 
            ["option-4","hello=4"], // this string value 
            ])
        
            maps_1.set("option-5" , "hello"); // for add new and value  in map
            maps_1.set("option-5" , 45); //  "update value's key"
        
            console.log(maps_1);

            // Create map using only set method 
        
            const maps_2 = new Map([])
        
            maps_2.set("option-1",20);
            maps_2.set("option-2",25);
            maps_2.set("option-3",30);
        
            maps_2.set("option-2",35); //  "update value's key"
            console.log(maps_2);
        }

        {

            // delete() using 
        
           const maps_3 = new Map ([
            ["option-1",2],
            ["option-2",30],
            ["option-3","hello=3"],  // this string value 
            ["option-4","hello=4"], // this string value 
            ["option-5","hello=5"]  // this string value 
            ])
        
        
            maps_3.delete("option-1"); // delete key for map 
            maps_3.delete("option-4"); // delete key for map 
        
            console.log(maps_3.get("option-2"));
            console.log(maps_3);
        }
        
        {

            // has() using 
        
           const maps_4 = new Map ([
            ["option-1",2],
            ["option-2",30],
            ["option-3","hello=3"],  // this string value 
            ["option-4","hello=4"], // this string value 
            ["option-5","hello=5"]  // this string value 
            ])
        
            
            maps_4.delete("option-1"); // delete key for map 
            maps_4.delete("option-4"); // delete key for map 
            
            let z = maps_4.has("option-4"); // this has is return only true or false value 

            console.log("because in map_4 kye : 'option-4' is not exist  that's why this value is :- " + z);

            z = maps_4.has("option-5");  

            console.log("because in map_4 kye : 'option-5' is exist in map this value is :- " + z);
        
            console.log(maps_4.get("option-4"));

            console.log(maps_4);
        }


        
        {

            // size() using 

            const maps_5 = new Map ([
                ["option-1",2],
                ["option-2",30],
                ["option-3","hello=3"],  // this string value 
                ["option-4","hello=4"], // this string value 
                ["option-5","hello=5"]  // this string value 
                ])

            
                console.log(maps_5);
                console.log(maps_5.size);
            
        }


        {

            //entries  using 
        
           const maps_6 = new Map ([
            ["option-1",2],
            ["option-2",30],
            ["option-3","hello-1"],  // this string value 
            ["option-4","hello-1"], // this string value 
            ["option-5","hello-1"]  // this string value 
            ]);
        

            console.log(maps_6);
            console.log(maps_6.entries());
            
        }

        {

            //clear()  using 
        
           const maps_7 = new Map ([
            ["option-1",2],
            ["option-2",30],
            ["option-3","hello-1"],  // this string value 
            ["option-4","hello-1"], // this string value 
            ["option-5","hello-1"]  // this string value 
            ]);
        

            console.log(maps_7);
            maps_7.clear();
            console.log(maps_7);
            
        }

        {

            // key()  using 
        
           const maps_8 = new Map ([
            ["option-1",2],
            ["option-2",30],
            ["option-3","hello-1"],  // this string value 
            ["option-4","hello-1"], // this string value 
            ["option-5","hello-1"]  // this string value 
            ]);
        

            console.log(maps_8);
            console.log(maps_8.keys());
            
        }

        {

            // value()  using 
        
           const maps_9 = new Map ([
            ["option-1",2],
            ["option-2",30],
            ["option-3","hello-1"],  // this string value 
            ["option-4","hello-1"], // this string value 
            ["option-5","hello-1"]  // this string value 
            ]);
        

            console.log(maps_9);
            console.log(maps_9.values());
            
        }

        {

            // forEach() using 
        
           const maps_10 = new Map ([
            ["option-1",2],
            ["option-2",30],
            ["option-3","hello-1"],  // this string value 
            ["option-4","hello-1"], // this string value 
            ["option-5","hello-1"]  // this string value 
            ]);
        

            console.log(maps_10);
            let txt = "";
            maps_10.forEach(function (Item,Key) {
                txt += Key + " - " + Item + "\n";
            });
            console.log(txt);
            
        }
}