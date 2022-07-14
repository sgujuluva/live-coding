import "./App.css";
import { useContext } from "react";
import { CurrencyContext } from "./context/currencyContext";
import { CURRENCIES } from "./context/currencyContext";

const DATA = [
  {
    id: "1",
    title: "The Road to React",
    price: 19.99,
  },
  {
    id: "2",
    title: "The Road to GraphQL",
    price: 29.99,
  },
];

const Book = ({ item }) => {
  const currency = useContext(CurrencyContext);

  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.code,
  }).format(item.price * currency.conversionRate);

  return (
    <li>
      {item.title} - {price}
    </li>
  );
};

const App = () => {
  const { currency, setCurrency } = useContext(CurrencyContext);

  return (
    <CurrencyContext.Provider value={currency}>
      <CurrencyButtons onChange={setCurrency} />

      <ul>
        {DATA.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </ul>
    </CurrencyContext.Provider>
  );
};

const CurrencyButtons = ({ onChange }) => {

  return Object.values(CURRENCIES)?.map((item) => (
    <CurrencyButton key={item.label} onClick={() => onChange(item)}>
      {item.label}
    </CurrencyButton>
  ));
};

const CurrencyButton = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default App;
