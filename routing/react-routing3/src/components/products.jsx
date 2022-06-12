import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import Urun from './Urun';

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


 const Products = () => {
    return (
        <div>
            <div className='col-md-12 '>
                <div className="alert alert-primary" role="alert">
                    <h3 className='text-center'>ürünler sayfasına Hoşgeldiniz..</h3>
                </div>
                <div className='cards_container row'>
                {
                    veri.map((linkler)=>{
                        return(
                            /* card start */ 
                            <div key={linkler.id} className="card col-md-5">
                            <div className="card-body">
                                <h5 className="card-title">{linkler.kategori}</h5>
                                <p className="card-text">{linkler.urun}</p>
                                <Link to={`${linkler.id}`} className="btn btn-primary">Detaylara bak..</Link>
                                {/* <Link to={`${linkler.id}`} className="btn btn-primary">Detaylara bak..</Link> */}
                            </div>
                            </div>
                            /* card end */
                        )
                    })
                }
                </div>
                
                    <Outlet/>
            </div>
        </div>
    );
}

export default Products;
