import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.jpg";

export const productImages = {
    1: p1_img,
    2: p2_img,
    3: p3_img,
    4: p4_img,
    5: p5_img,
    6: p6_img,
    7: p7_img,
    8: p8_img,
    9: p9_img,
    10: p10_img,
    11: p11_img,
    12: p12_img,
    13: p13_img,
    14: p14_img,
    15: p15_img,
    16: p16_img,
    17: p17_img,
    18: p18_img,
    19: p19_img,
    20: p20_img,
    21: p21_img,
    22: p22_img,
    23: p23_img,
    24: p24_img,
    25: p25_img,
    26: p26_img,
    27: p27_img,
    28: p28_img,
    29: p29_img,
    30: p30_img,
    31: p31_img
};

export const getProductImage = (id) => {
    return productImages[id] || productImages[1];
};

export const getCategoryDefaultImage = (category) => {
    const defaults = {
        bats: p1_img,
        balls: p11_img,
        kits: p19_img
    };
    return defaults[category] || defaults.bats;
}; 