import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

type Product = {
  name: string;
  price: string;
  quantity: number;
  image: string;
};

type TemplateProps = {
  title: string;
  products?: Product[];
};

const styles = StyleSheet.create({
  page: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  section: {
    marginBottom: 12,
  },
  productRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottom: '1px solid #ccc',
    paddingBottom: 10,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 14,
  },
  productPrice: {
    fontSize: 12,
    color: '#555',
  },
  image: {
    width: 50,
    height: 50,
  },
  total: {
    fontSize: 18,
    textAlign: 'right',
    marginTop: 20,
  },
});

const mock = [
  {
    name: 'Product 1',
    price: 'R$ 100,00',
    quantity: 2,
    image: 'https://via.placeholder.com/50',
  },
  {
    name: 'Product 2',
    price: 'R$ 200,00',
    quantity: 1,
    image: 'https://via.placeholder.com/50',
  },
];

const VladTamplate = ({ title, products = mock }: TemplateProps) => {
  const calculateTotal = () => {
    return mock
      .reduce((acc, product) => {
        return acc + parseFloat(product.price.replace('R$', '')) * product.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <Document author="Estimou" title="Orçamento">
      <Page size="A4" style={styles.page}>
        {/* Título */}
        <Text style={styles.title}>{title}</Text>

        {/* Lista de Produtos */}
        {mock.map((product, index) => (
          <View key={index} style={styles.productRow}>
            <Image style={styles.image} src={product.image} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>Preço: {product.price}</Text>
              <Text style={styles.productPrice}>Quantidade: {product.quantity}</Text>
            </View>
          </View>
        ))}

        {/* Total */}
        <Text style={styles.total}>Total: R$ {calculateTotal()}</Text>
      </Page>
    </Document>
  );
};

export default VladTamplate;
