export const formatMoney = (money = "0") => {
    money = money.toString();
    return money.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + " Đồng";
};
