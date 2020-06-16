export default function formatNumber(number) {
  return new Intl.NumberFormat('pt-BR').format(number)
}