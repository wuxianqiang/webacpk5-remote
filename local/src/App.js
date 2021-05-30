import React from "react";
// import NewsList from './NewsList';
// const App = () => (
//   <div>
//     <h2>本地组件NewsList</h2>
//     <NewsList />
//   </div>
// );

const RemoteNewsList = React.lazy(() => import("remote/NewsList"));

const App = () => (
  <div>
    <h2 >远程组件NewsList</h2>
    <React.Suspense fallback="Loading NewsList">
      <RemoteNewsList />
    </React.Suspense>
  </div>
);
export default App;

