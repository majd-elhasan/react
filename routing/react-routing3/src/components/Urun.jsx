import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { useParams } from "react-router-dom";

const veri=[
    {
        id : 1,
        kategori : "Anakart",
        urun : "MSI",
        fiyat : 5000,
        acıklama : "MSI Anakart 3 adet DDRS slot vb..."
    },
    {
        id : 2,
        kategori : "Ekran kartı",
        urun : "NVidia",
        fiyat : 9000,
        acıklama : "NVidia ekran kartı HDMI"
    },
    {
        id : 3,
        kategori : "hard disk",
        urun : "Samsung",
        fiyat : 2500,
        acıklama : "SAMSUNG HARD DİSK 1 TB"
    }
  ]; 

function Urun() {
    const {UrunID}  = useParams();
    let arr= veri.filter((item)=>{
        return(
            item.id == UrunID
        )
    })
    if (UrunID <= veri.length && UrunID > 0)
        return(
            <div class="alert alert-info" role="alert">
                <div>{arr[0].kategori}</div>
                <div>{arr[0].urun}</div>
                <div>{arr[0].acıklama}</div>
                <div>{arr[0].fiyat}</div>
            </div>
            
        )
        else return(
            <>
            <div class="alert alert-info" role="alert">
            this Product is not found
            </div>
            </>
        )
    }

export default Urun;
