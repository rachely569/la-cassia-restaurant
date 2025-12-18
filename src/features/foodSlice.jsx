import { createSlice } from "@reduxjs/toolkit"

const initValue = {
    foods: [
        { id: 1, name: "בוקר 1953 ", price: 75, img: '/imgs/aruchat boker.webp', nameCategory: 'ארוחת בוקר', description: 'אומלט לבחירה, מוגש עם גבינת שמנת, טונה, אבוקדו, סלט ביצים, פסטו, בולגרית וגבינות משק עם סלט ישראלי, שתיה חמה ומיץ טבעי', like: 80 },
        { id: 2, name: "בוקר זוגי ", price: 45, img: '/imgs/boger zugi.webp', nameCategory: 'ארוחת בוקר', description: 'בוקר זוגי מלכותי מבחר גבינות, ירקות טריים וצלויים, מתבלי הבית אומלט / בנדיקט / שקשוקית לבחירה, שתיה חמה ומיץ טבעי ומוזלי זוגי', like: 25 },
        { id: 3, name: "קרוק מסייה ", price: 76, img: '/imgs/krok misie.jpg', nameCategory: 'ארוחת בוקר', description: 'טוסט גאודה, חמאה ופטריות צלויות בלחם מחמצת. מוגש עם שתיה חמה או מיץ טבעי וסלט הבית', like: 14 },
        { id: 4, name: "מקושקשת כמהין", price: 26, img: '/imgs/mekushkeshet kamehin.webp', nameCategory: 'ארוחת בוקר', description: 'לחם בריוש צרוב בחמאת כמהין, ביצה מקושקשת, עירית וגבינת פקורינו. מוגש עם סלט קיסר שתיה חמה או מיץ טבעי', like: 68 },
        { id: 5, name: " בנדיקט טרטופו", price: 78, img: '/imgs/bendiket.jpg', nameCategory: 'ארוחת בוקר', description: 'ביצים עלומות, ברוטב שמנת כמהין על לחם בריוש קלוי, פטריות פורטובלו צלויות ופרמזן, מוגש עם סלט עלים ושתיה חמה או מיץ טבעי', like: 91 },
        { id: 6, name: "שקשוקה קפרזה ", price: 52, img: '/imgs/shakshuka.webp', nameCategory: 'ארוחת בוקר', description: 'תבשיל עגבניות, פלפלים, בצל ופסטו בתוספת ביצים טריות, בזיליקום ובייבי מוצרלה. מוגש עם לחם הבית, טחינה, זיתים שתייה חמה או מיץ טבעי', like: 1000 },
        { id: 7, name: "בוקר מתוק", price: 58, img: '/imgs/boker matok.webp', nameCategory: 'ארוחת בוקר', description: 'שלישיית פנקייקים, חמאת מייפל, דובדבני אמרנה, קרם דיפלומט ואגוזים מקורמלים', like: 57575 },
        { id: 10, name: "קפה ומאפה", price: 558, img: '/imgs/kafe and maafe.jpg', nameCategory: 'ארוחת בוקר', description: 'אפה לבחירה ושתייה חמה / מיץ טבעי', like: 577555 },
        { id: 8, name: "מוזלי", price: 58, img: '/imgs/muzli.jpg', nameCategory: 'ארוחת בוקר', description: 'סלט פירות טרי, יוגורט, גרנולה עשירה ודבש', like: 5755 },
        { id: 11, name: "סיגר גבינות", price: 58, img: '/imgs/sugar gvina.jpg', nameCategory: 'צהריים ערב', description: 'במילוי ריקוטה, בולגרית, מוצרלה ופסטו עם איולי אריסה וטחינת חצילים', like: 57575 },
        { id: 12, name: "קריספי רביולי ", price: 10, img: '/imgs/krispi rivyoli.webp', nameCategory: 'צהריים ערב', description: 'בצק פסטה במילוי גבינות רכות, בציפוי פריך ובליווי מטבל עגבניות ואיולי פסטו', like: 57575 },
        { id: 13, name: "טאקו מקסיקני", price: 169, img: '/imgs/אסיתי.jpg ', nameCategory: 'צהריים ערב', description: 'צמד טורטיות במילוי שווארמה דג ים, אבוקדו, עגבניות, חסה, בצל כבוש ואיולי חלפניו', like: 575757 },
        { id: 14, name: "קבב לוקוס", price: 10, img: '   /imgs/שיפוד סלומון אסיאתי.webp', nameCategory: 'צהריים ערב', description: 'קצוץ על הסכין, טחינה , ליבת חציל, סלסת עגבניות ובצל כבוש', like: 757555 },
        { id: 15, name: "בורטה קפרזה", price: 10, img: '/imgs/borto kapreza.jpg', nameCategory: 'צהריים ערב', description: 'בורטה קפרזה64עגבניות שרי, קונפי שרי, בצל סגול, פסטו, שמן זית ופו', like: 5755 },
        { id: 16, name: "סלט כל טוב כרובית", price: 100, img: '/imgs/סלט כל טוב כרובית.jpg ', nameCategory: 'צהריים ערב', description: 'כרובית, מלפפון, בורגול, חומוס, בצל סגול ועשבי תיבול, שקדים קלויים, ביצה רכה, טחינה וזעתר', like: 0 },
        { id: 17, name: "צ'יפס כמהין", price: 100, img: '/imgs/ציפס.jpg ', nameCategory: 'צהריים ערב', description: ' מוגש עם איולי צילי וכוסברה', like: 25552 },
        { id: 18, name: "ארנצ'יני פטריות", price: 100, img: '/imgs/ארניצי פיטריות.jpg', nameCategory: 'צהריים ערב', description: ' כדורי ריזוטו פורציני ממולאים בגבינות על חמאת עגבניות, פסטו ופרמזן  ', like: 474 },
        { id: 19, name: "פלאפל כרובית", price: 10, img: '/imgs/falafel kruvit.jpg ', nameCategory: 'צהריים ערב', description: ' כרובית במילוי גבינות מצופה על חמאת צילי ועירית', like: 86686 },
        { id: 20, name: "חציל יווני", price: 100, img: '/imgs/חציל-יווני-זוגי-על-האש.jpg ', nameCategory: 'צהריים ערב', description: 'חציל קלוי, בצל סגול, שמן זית וצנוברים, על טחינת חציל שחור, קרקר זעתר וגבינה פטה', like: 0 },
        { id: 21, name: " סיי ציז", price: 10, img: '/imgs/sii tziz.jpg', nameCategory: 'צהריים ערב', description: 'מקלות גבינה בציפוי פריך בליווי סלסלת עגבניות ואיולי פסטו', like: 86868 },
        { id: 22, name: "רוזה לה פלור - יין לבן", price: 78, img: 'imgs/רוזה לה פלור.webp ', nameCategory: 'יין וקקטיילים', description: 'וזה פירותי ומינרלי, טעמי פירות יער אדומים, תות ודובדבן ובעל מתיקות מעודנת במיוחד', like: 0 },
        { id: 23, name: "שרדונה ללא עץ - יין לבן יבש", price: 65, img: '/imgs/לוריא_שרדונה_ללא_עץ.jpg ', nameCategory: 'יין וקקטיילים', description: 'יין בעל צבע קש ירקרק, גוף היין קל-בינוני, עשיר בטעמי תפוח עץ, פירות טרופיים והדרים', order: 2, like: 0 },
        { id: 24, name: "טרסה - יין אדום ", price: 47, img: '/imgs/טרסה יין אדום.jpg', nameCategory: 'יין וקקטיילים', description: 'בעל גוף מלא, מרקם אלגנטי ומורכב , טעם עשיר של פירות יער, סיומת ארוכה ונעימה, יישון-14 חודשים בחביות עץ אלון צרפתיות', like: 0 },
        { id: 25, name: "גוורצטרמינר - יין לבן", price: 23, img: '/imgs/יין לבן אימפריישן-גוורצמינר.jpg ', nameCategory: 'יין וקקטיילים', description: 'ניחוחות עשירים של פירות הדר, פירות טרופיים, קיווי ואננס, בעל מתיקות עדינה עם חמיצות מאוזנת ונעימה	', like: 0 },
        { id: 26, name: "וודקה סאנשיין", price: 52, img: '/imgs/וודקא סאנשיין.avif ', nameCategory: 'יין וקקטיילים', description: 'וודקה, קואנטרו, מיץ לימון, מיץ תפוזים וסירופ פסיפלורה', like: 32 },
        { id: 27, name: "בננה קולאדה", price: 99, img: '/imgs/מתכון-לקוקטייל-פינה-קולדה.webp ', nameCategory: 'יין וקקטיילים', description: 'רום, ליקר בננה, מיץ לימון, סירופ קוקס ומיץ אננס', like: 56 },
        { id: 28, name: "אפרול רוזמרין שפריץ", price: 104, img: '/imgs/אפרול-שפריץ-מתכון.jpg ', nameCategory: 'יין וקקטיילים', description: 'אפרול, מיץ לימון, יין מבעבע וסודה  ', like: 12 },

    ],
    shoppingCart: [],
    likedFoodIds: [],
    filteredFoods:[],
    totalPrice: 0,
    selectedCategory: 'הכל',
    sortOrder: 'none',
};

const calculateTotalPrice = (state) => {
    return state.shoppingCart.reduce((sum, item) => {
        const price = item.price || 0;
        const quantity = item.quantity || 0;
        return sum + (price * quantity);
    }, 0);
};
const foodSlice = createSlice({
    name: "food_Slice",
    initialState: initValue,
    reducers: {
        addFood: (state, action) => {
            state.foods.push(action.payload);
        },
        get: (state, action) => {
            state.foods = state.foods.filter(i => i.name === action.payload)

        },
        deleteItems: (state, action) => {
            state.foods = state.foods.filter((food) => food.id !== action.payload);
        },
        updateFood: (state, action) => {
            const index = state.foods.findIndex((food) => food.id === action.payload.id);
            if (index !== -1) {
                state.foods[index] = action.payload;
            }
        },
        addToBug: (state, action) => {
            const exissting = state.shoppingCart.find(b => b.id === action.payload.id)

            if (exissting) {
                (exissting.quantity += 1)
            }
            else {
                state.shoppingCart.push({ ...action.payload, quantity: 1 })
            }
            state.totalPrice = calculateTotalPrice(state);
        },
        dellInBug: (state, action) => {
            const exissting = state.shoppingCart.find(b => b.id === action.payload);

            if (!exissting) {
                return;
            }
            if (exissting.quantity > 1) {
                (exissting.quantity -= 1)
            }
            else {
                state.shoppingCart = state.shoppingCart.filter(d => d.id !== action.payload)

            }
            state.totalPrice = calculateTotalPrice(state);
        },
        addLike: (state, action) => {
            const foodId = action.payload.id;

            const index = state.foods.findIndex(food => food.id === foodId);

            if (index === -1 || state.foods[index].like === undefined) {
                return;
            }

            const alreadyLiked = state.likedFoodIds.includes(foodId);

            if (alreadyLiked) {
                state.likedFoodIds = state.likedFoodIds.filter(id => id !== foodId);
                state.foods[index].like -= 1;
            }
            else {
                state.likedFoodIds.push(foodId);
                state.foods[index].like += 1;
            }
        },

        sortByPrice: (state) => {
            if (state.foods) {
                state.foods = [...state.foods].sort((a, b) => a.price - b.price);
            }
        },
        filterByCategory: (state, action) => {
    const category = action.payload;
    state.selectedCategory = category;
    if (!category || category === 'הכל' || category === 'All') {
        state.filteredFoods = state.foods;
    } else {
        state.filteredFoods = state.foods.filter(food => {
            const foodCat = food.nameCategory ? food.nameCategory.trim() : "";
            return foodCat === category.trim();
        });
    }
}
    }
})

export const { addFood, get, deleteItems, addLike, sortByPrice, addToBug, updateFood, dellInBug, filterByCategory } = foodSlice.actions

export default foodSlice.reducer 