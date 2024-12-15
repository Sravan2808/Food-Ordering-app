# Namaste React 🚀

# Parcel
- Dev Build
- Local Server
- HMR = Hot MOdule Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support older browsers
- Diagnostic
- Error Handling
- Https
- Tree Shaking - remove unUsed code
- Different dev and prod bundles


# Namaste Food

/**
 * Header
 * - logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *    - RestaurantCard
 *      - Name
 *      - Name of Res,Star Rating,cuisine,delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

 Two types of Export/Import
 
-Default Export/Import

export default Component;
import Component from "path";

-Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks
(Normal Js Utility Functions)
-useState() - Superpowerful state variable in react
-useEffect() 

# 2 Types Routing in Web apps
- Client Side Routing
- Server Side Routing


# Redux ToolKit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connnect our store to our app
- Create a Slice(cartSlice)
- dispatch(action)
- Selector

# Types of testing (developer)
- Unit Testing - one component in isolation
- Integration Testing - Testing the integration of components
- End to End Testing -e2e testing  - 

# Setting up Testing in our app
 - Install React-Testing Library
 - Installed jest
 - Install Babel dependence
 - Configure Babel
 - Configure Parcel Config file to disable default babel transpilation
 - Jest configuration(npx jest --init)
 - Install jsdom library
 - Install @babel/preset-react - to make jsx work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom
    - npm i -D @testing-library/jest-dom