const initialState = {
    promotions: [
        {
            id: 1,
            title: 'ולנסיה וקוסטה בלנקה',
            img: '../../assets/promoImage.jpg'
        }
    ],
};

const reducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET_PROMOTIONS':
            return {
                ...state,
                promotions: payload,
            };

        default:
            return { ...state };
    }
};

export default reducers;
