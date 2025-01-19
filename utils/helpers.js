export function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

export function shortenString(str, maxLength) {
    if (!str || str.length <= maxLength) {
      return str;
    } else {
      return str.slice(0, maxLength) + "...";
    }
  }

export function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
            width: 28,
            height:28,
            fontSize:"14px",
            fontFamily: "Poppins"
        },
        //children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        children: `${name.split(' ')[0][0].toUpperCase()}`,
    };
} 

export function AddComma(price) {
    // Convert price to string and split it into integer and decimal parts
    const [integerPart, decimalPart] = String(price).split('.');

    // Add commas for thousands, hundred thousands, etc. using regex
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Combine integer and decimal parts with a dot (if decimal part exists)
    return decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;
} 

export function capitalizeFirstLetter(name) {
  if (!name) return ''; // Handle empty string or undefined input
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
} 

export const products = [
  {
    name: "Rose Bouquet",
    category: "Flowers",
    price: 49.99,
    previousPrice: 59.99
  },
  {
    name: "Luxury Gift Hamper",
    category: "Gifting",
    price: 129.99,
    previousPrice: 149.99
  },
  {
    name: "Personalized Event Decor",
    category: "Events",
    price: 299.99,
    previousPrice: 349.99
  },
  {
    name: "Succulent Plant Set",
    category: "Gifting",
    price: 24.99,
    previousPrice: 34.99
  },
  {
    name: "Wedding Floral Arrangement",
    category: "Flowers",
    price: 499.99,
    previousPrice: 599.99
  },
  {
    name: "Birthday Party Package",
    category: "Events",
    price: 199.99,
    previousPrice: 249.99
  },
  {
    name: "Customized Gift Box",
    category: "Gifting",
    price: 74.99,
    previousPrice: 89.99
  },
  {
    name: "Anniversary Flower Basket",
    category: "Flowers",
    price: 89.99,
    previousPrice: 109.99
  }
];
