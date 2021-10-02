import NavigationBar from './components/NavigationBar'
import FormRender from "./components/FormRender";
function App() {
  return (
    <div>
      <NavigationBar />
      <div id="formdiv">
        <FormRender />
      </div>
    </div>
  );
}

export default App;
