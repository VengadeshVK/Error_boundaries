import Counter from "./Counter";
import CustomerName from "./CustomerName";
import Errorboundaries from "./Errorboundaries";
import NameErrorBoundary from "./NameErrorBoundary";

function App() {
  return (
    <div className="App">
      <NameErrorBoundary>
        <CustomerName CustomerName='Sam' />
      </NameErrorBoundary>
      <NameErrorBoundary>
        <CustomerName CustomerName='Jhon' />
      </NameErrorBoundary>
      <NameErrorBoundary>
        <CustomerName CustomerName='Ram' />
      </NameErrorBoundary>

      {/* Another example for error boundary */}

      <Errorboundaries>
        <Counter />
      </Errorboundaries>
      <h3>Second</h3>
      <Errorboundaries>
        <Counter />
      </Errorboundaries>

    </div>
  );
}

export default App;
