export default function formatIndianNumber(number: number): string {
    const indianFormatter = new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0,
    });
    return indianFormatter.format(number);
  }
  