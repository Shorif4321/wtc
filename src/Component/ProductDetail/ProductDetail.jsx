import React from 'react';
import "./ProductDetail.css"
import detailImage from "../../img/details.png"
import ContactInfo from '../Shared/ContactInfo/ContactInfo';
const ProductDetail = () => {
    return (
        <div>
            {/* Product details hero */}
            <div className='product-hero p-5'>
                <div className='col-md-5 col-12  m-auto py-md-3'>
                    <h1>Our Machineries products</h1>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor tempus mauris ligula eget. Vehicula lorem sit integer volutpat nunc eu, consequat nisi. Phasellus tincidunt fames auctor vestibulum.</p>
                </div>
            </div>

            {/* Details section start */}
            <section className='container'>
                <div className='product-details'>
                    <h1 className='text-left py-5 details-head'>Screw press filter</h1>
                    <img className='img-fluid' src={detailImage} alt="" />
                    <p>A screw press is a type of machine press in which the ram is driven up and down by a screw. The screw shaft can be driven by a handle or a wheel. It works by using a coarse screw to convert the rotation of the handle or drive-wheel into a small downward movement of greater force.
                        The overhead handle usually incorporates balls as flyweights. The weights helps to maintain the momentum and thrust of the tool to make it easier to operate.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit, praesent sed vestibulum elit viverra morbi ultricies. Eleifend laoreet iaculis turpis sociis viverra. At proin blandit nisl, duis in pretium. Hac lectus aliquet posuere ultrices pulvinar lacinia dignissim. Et sit accumsan adipiscing id et, habitasse varius sed platea. Ut malesuada gravida amet libero, non venenatis sollicitudin est vitae. Elementum erat augue est turpis. Erat sed arcu imperdiet facilisis sed quis nulla vulputate consequat. Odio lectus nunc semper nulla velit, nec varius luctus.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit, praesent sed vestibulum elit viverra morbi ultricies. Eleifend laoreet iaculis turpis sociis viverra. At proin blandit nisl, duis in pretium. Hac lectus aliquet posuere ultrices pulvinar lacinia dignissim. Et sit accumsan adipiscing id et, habitasse varius sed platea. Ut malesuada gravida amet libero, non venenatis sollicitudin est vitae. Elementum erat augue est turpis. Erat sed arcu imperdiet facilisis sed quis nulla vulputate consequat. Odio lectus nunc semper nulla velit, nec varius luctus.
                    </p>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit, praesent sed vestibulum elit viverra morbi ultricies. Eleifend laoreet iaculis turpis sociis viverra. At proin blandit nisl, duis in pretium. Hac lectus aliquet posuere ultrices pulvinar lacinia dignissim. Et sit accumsan adipiscing id et, habitasse varius sed platea. Ut malesuada gravida amet libero, non venenatis sollicitudin est vitae. Elementum erat augue est turpis. Erat sed arcu imperdiet facilisis sed quis nulla vulputate consequat. Odio lectus nunc semper nulla velit, nec varius luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit, praesent sed vestibulum elit viverra morbi ultricies. Eleifend laoreet iaculis turpis sociis viverra. At proin blandit nisl, duis in pretium. Hac lectus aliquet posuere ultrices pulvinar lacinia dignissim. Et sit accumsan adipiscing id et, habitasse varius sed platea. Ut malesuada gravida amet libero, non venenatis sollicitudin est vitae. Elementum erat augue est turpis. Erat sed arcu imperdiet facilisis sed quis nulla vulputate consequat. Odio lectus nunc semper nulla velit, nec varius luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit, praesent sed vestibulum elit viverra morbi ultricies. Eleifend laoreet iaculis turpis sociis viverra. At proin blandit nisl, duis in pretium. Hac lectus aliquet posuere ultrices pulvinar lacinia dignissim. Et sit accumsan adipiscing id et, habitasse varius sed platea. Ut malesuada gravida amet libero, non venenatis sollicitudin est vitae. Elementum erat augue est turpis. Erat sed arcu imperdiet facilisis sed quis nulla vulputate consequat. Odio lectus nunc semper nulla velit, nec varius luctus.</p>
                </div>
            </section>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default ProductDetail;