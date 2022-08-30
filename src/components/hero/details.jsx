import minus from '../../images/icon-minus.svg';
import plus from '../../images/icon-plus.svg';

const Details = () => {
    return (  
        <section>
            <div className="container mx-auto px-4">
                <h3 className="text-primary-orange uppercase text-sm font-bold">sneaker company</h3>
                <h1 className="capitalize text-2xl font-bold mt-4">fall limited edition sneakers</h1>
                <p className="text-neutral-dark-grayish-blue mt-6">These low-profile sneakers are perfect causual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>

                <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-4 items-center">
                        <p className="font-bold text-2xl">$125.00</p>

                        <p className="bg-primary-pale-orange py-1 px-2 text-primary-orange font-bold rounded-lg">50%</p>
                    </div>

                    <div>
                        <p className="font-bold text-neutral-grayish-blue line-through">$250.00</p>
                    </div>
                </div>

                <div className='mt-4 flex flex-col gap-6'>
                    <div className="bg-neutral-light-grayish-blue w-full flex justify-between items-center px-4 py-3 rounded-lg">
                        <div>
                            <img src={minus} alt="minus" />
                        </div>

                        <p className='font-bold'>0</p>

                        <div>
                            <img src={plus} alt="plus" />
                        </div>
                    </div>

                    <button className='flex justify-center w-full gap-2 bg-primary-orange py-4 rounded-lg text-white text-sm'>
                        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fill-rule="nonzero"/></svg>
                        <p className='font-bold'>Add to cart</p>
                    </button>
                </div>
            </div>
        </section>
    );
}
 
export default Details;