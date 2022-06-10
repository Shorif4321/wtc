import React from 'react';
import "./ServiceDetails.css"
import ServiceDetail from "../../img/serviceDetails.png"
import okay2 from "../../img/okay2.png"
import same from "../../img/same.png"

const ServiceDetails = () => {
    return (
        <div>
            {/* ================ Effluent Treatment  section start =========*/}
            <section className='service-details-hero'>
                <div className='py-5'>
                    <h1 className='text-center py-5'>Effluent Treatment Plant (ETP)</h1>
                </div>
            </section>
            {/*========== service section 1 =========== */}
            <section className='service-detail-main container my-5'>
                <div className='text-left'>
                    <h2>Effluent Treatment Plant (ETP)</h2>
                    <img className='img-fluid' src={ServiceDetail} alt="" />
                    <p>
                        Water Technology BD Ltd (WTB) & HKF Engineering & Trading are the nation’s leading wastewater treatment plant engineers with industrial wastewater treatment expertise successfully working with Effluent Treatment Plant or ETP is one type of waste water treatment method which is particularly designed to purify industrial waste water for its reuse and its aim is to release safe water to environment from the harmful effect caused by the effluent.
                    </p>
                    <p>
                        Industrial effluents contain various materials, depending on the industry. Some effluents contain oils and grease, and some contain toxic materials (e.g., cyanide). Effluents from food and beverage factories contain degradable organic pollutants. Since industrial waste water contains a diversity of impurities and therefore specific treatment technology called ETP is required.
                    </p>
                </div>
            </section>
            {/* ============ service section 2 ========== */}
            <section className='service-second container my-5'>
                <div className='text-left'>

                    <img className='img-fluid' src={ServiceDetail} alt="" />
                    <h2 className=''>Process Flow Chart of Effluent Treatment Plant (ETP):</h2>
                    <p><img className='mr-3' src={okay2} alt="" />Collection Tank</p>
                    <p><img className='mr-3' src={okay2} alt="" />Strong Talk</p>
                    <p><img className='mr-3' src={okay2} alt="" />Mixing and cooling wish</p>
                    <p><img className='mr-3' src={okay2} alt="" />Mixing and cooling afk</p>
                    <p><img className='mr-3' src={okay2} alt="" />Mixing and cooling and some text will be go here</p>
                    <p><img className='mr-3' src={okay2} alt="" />Mixing and cooling</p>
                    <p><img className='mr-3' src={okay2} alt="" />Mixing and cooling other</p>
                    <p><img className='mr-3' src={okay2} alt="" />Mixing and cooling</p>
                </div>
            </section>

            {/* ============ service section 3  ========== */}
            <section className='service-second container my-5'>
                <div className='text-left'>
                    <h2 className=''>Benefits of ETP:</h2>
                    <p>1. Collection Tank</p>
                    <p>2. Strong Talk</p>
                    <p>3. Mixing and cooling wish</p>
                    <p>4. Mixing and cooling afk</p>
                    <p>5. Mixing and cooling and some text will be go here</p>
                    <p>6. Mixing and cooling</p>
                    <p>7. Mixing and cooling other</p>
                </div>
            </section>

            {/* ============ service related cart section 3  ========== */}
            <section className=' mb-5 pb-5 service-same container d-md-flex justify-content-between'>
                <div className='text-left col-12 col-md-4'>
                    <img className='img-fluid' src={same} alt="" />
                    <h1>Biological Treatment Plant</h1>
                    <p>Water Technology BD Ltd (WTB) offers exclusively designed Biological treatment Plant that is an important and integral part of any wastewater treatment plant that treats wastewater from either municipality or industry having soluble organic impurities or a mix of the two types of wastewater sources. The obvious economic advantage, both in terms of capital investment and operating costs, of biological treatment over other treatment processes like chemical oxidation; thermal oxidation etc. has cemented its place in any integrated wastewater treatment plant.</p>

                </div>
                <div className='text-left col-12 col-md-4'>
                    <img className='img-fluid' src={same} alt="" />
                    <h1>Biological Treatment Plant</h1>
                    <p>Water Technology BD Ltd (WTB) offers exclusively designed Biological treatment Plant that is an important and integral part of any wastewater treatment plant that treats wastewater from either municipality or industry having soluble organic impurities or a mix of the two types of wastewater sources. The obvious economic advantage, both in terms of capital investment and operating costs, of biological treatment over other treatment processes like chemical oxidation; thermal oxidation etc. has cemented its place in any integrated wastewater treatment plant.</p>

                </div>
                <div className='text-left col-12 col-md-4'>
                    <img className='img-fluid' src={same} alt="" />
                    <h1>Biological Treatment Plant</h1>
                    <p>Water Technology BD Ltd (WTB) offers exclusively designed Biological treatment Plant that is an important and integral part of any wastewater treatment plant that treats wastewater from either municipality or industry having soluble organic impurities or a mix of the two types of wastewater sources. The obvious economic advantage, both in terms of capital investment and operating costs, of biological treatment over other treatment processes like chemical oxidation; thermal oxidation etc. has cemented its place in any integrated wastewater treatment plant.</p>

                </div>
            </section>

        </div>
    );
};

export default ServiceDetails;