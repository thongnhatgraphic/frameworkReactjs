
var initState = [
    {
        id: 1,
        name: "Note 10 Galaxy",
        image: "https://cdn.tgdd.vn/Products/Images/42/191276/samsung-galaxy-note-10-silver-600x600.jpg",
        description: "Sản Phẩm Của Hãng Sam Sung....Rất xink",
        price: 400,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: "Note 9 Galaxy",
        image: "https://img.fpt.shop/w_585/h_390/f_jpg/cmpr_10/m_letterbox_ffffff_100/https://fptshop.com.vn/Uploads/Originals/2018/8/20/636703738270710068_note9-xanh-3.jpg",
        description: "Sản Phẩm Của Hãng Sam Sung.... Rất Đẹp",
        price: 300,
        inventory: 8,
        rating: 4
    },
    {
        id: 3,
        name: "Note 8 Galaxy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU62OvnccjxX36geKAGAS3Hfph-nuBzRY0vXufrLKTtN79oiyhvnKrLMz6S8Ywv7UnqGWWpueL&usqp=CAc",
        description: "Sản Phẩm Của Hãng Sam Sung....Đời cũ",
        price: 300,
        inventory: 5,
        rating: 3
    }
]

const productsReducer = (state = initState, action) => {
    switch (action.type) {

        default: return [...state]

    }
}
export default productsReducer;