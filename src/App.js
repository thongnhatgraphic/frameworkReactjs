import ProductsContainer from "./container/ProductsContainer"
import CartContainer from "./container/CartContainer"
import MessageContainer from "./container/MessageContainer"
function App() {
    return (
        <div>
            <main id="mainContainer">
                <div className="container">
                    {/* <!-- Products --> */}
                    <ProductsContainer />

                    {/* <!-- Message --> */}
                    <MessageContainer />
                    {/* <!-- Cart --> */}
                    <CartContainer />
                </div>
            </main>
        </div>
    );
}

export default App;
