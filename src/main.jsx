import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet } from '@tanstack/react-router'
import { RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router'
import './index.css'

// ページコンポーネント
import Home from './pages/Home.jsx'
import Viewer from './pages/Viewer.jsx'

// ルート定義
const rootRoute = createRootRoute({
  component: () => <div><Outlet /></div>, // Outletで子ルートを表示
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

export const viewerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/viewer/$dir', // 動的パラメータ
  component: Viewer,

})

// ルーター作成
const router = createRouter({
  routeTree: rootRoute.addChildren([homeRoute, viewerRoute]),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

