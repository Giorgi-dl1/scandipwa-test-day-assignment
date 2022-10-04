import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import Progressbar from 'src/components/Progressbar';
import './Checkout.extension.style.scss';
class Checkout extends SourceCheckout {
  renderProgressbar() {
    const { checkoutStep } = this.props;

    const steps = Object.entries(this.stepMap).map((item) => {
      return { name: item[0], displayValue: item[1].title.value.split(' ')[0] };
    });
    return <Progressbar steps={steps} currentStep={checkoutStep} />;
  }
}

export default Checkout;
