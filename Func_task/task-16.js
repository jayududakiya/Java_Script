"use strict"
{
    /*
    Write program to given data.
    Rate   qty    amount    dis5%   bill amount gst18%  NetBill
     50    200    10000      500    9500          ?      = ?
    */

    let quantity = parseInt(prompt("Enter Product Quantity : ",200));

    function NetBill_count (qty) {
        let disc , Bill , GST , NetBill;
        let Amount = 0;
        let Rate =  50 ;

        Amount = qty * Rate ;
        disc = parseInt(Amount * 0.05);
        Bill = Amount -  disc ;

        GST = parseInt(Bill * 0.18 );

        NetBill = parseInt(Bill + GST );

        console.log('Product Quantity is :',qty);
        console.log('Product Rate is :',Rate);
        console.log('Product Amount is :',Amount);
        console.log('Product Discount is :',disc);
        console.log('Product Bill Amount is :',Bill);
        console.log('Product Bill GST is :',GST);
        console.log('Product NetBill is :',NetBill);
    };

    NetBill_count(quantity);

}