export default function validatePhoneNumber(phone) {
  let phoneNum = phone;
  if (/[\s-()]/g.test(phoneNum)) phoneNum = phoneNum.replace(/[\s-()]/g, ''); // удаление знаков пробела, '-', '(' и ')'
  if (/^\+?\d{11,12}$/.test(phoneNum)) { // номер телефона может содержать '+' и должен состоять из 11-12 цифр
    if (!phoneNum.startsWith('+')) {
      phoneNum = `+${phoneNum}`;
      if (phoneNum.length === 12) phoneNum = phoneNum.replace(/^(\+)8/, '$17'); // если номер состоит из '+' и 11 цифр (Россия) --> первую '8' заменить на '7'
    }
    return phoneNum;
  }
  return false;
}
