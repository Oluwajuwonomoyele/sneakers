const Cart = ({openCart}) => {
    return (  
        <section className={openCart ? "absolute w-[90%] h-[35vh] inset-x-0 mx-auto mt-4 bg-white z-50 rounded-lg" : "hidden absolute w-[90%] h-[35vh] inset-x-0 mx-auto mt-4 bg-white z-50 rounded-lg"}>
            <div className="py-4">
                <h1 className="text-md font-bold mb-4 px-4">Cart</h1>
                <div className="w-full h-[1px] bg-neutral-grayish-blue"></div>
                <div className="text-center mt-20 px-4">
                    <p className="text-neutral-dark-grayish-blue font-bold">Your cart is empty.</p>
                </div>
            </div>
        </section>
    );
}
 
export default Cart;