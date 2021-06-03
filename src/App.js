import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    // <BrowserRouter>で囲うと遷移が有効になる
    <BrowserRouter>
      <div className="App">
        {/* <Link>で囲うとリンクが有効になる */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
        <br />
      </div>
      {/* <Switch>はどのパスの時どのコンポーネントを表示するかを表す */}
      {/* その時使うのが<Route>
          <Route path="/">と書く */}
      <Switch>
        {/* exact path="OOO"は「完全一致」という意味 */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* renderでもpathを書ける。
            "Page1"のpathで<Page1 />コンポーネントを返却する */}
        <Route 
          path="/Page1" 
          render={() => (
            <Switch>
              <Page1 />
            </Switch>
           )} 
        />

        <Route path="/Page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
