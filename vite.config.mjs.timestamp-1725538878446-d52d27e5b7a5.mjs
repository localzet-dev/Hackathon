// vite.config.mjs
import { defineConfig } from "file:///mnt/d/DevDrive/Zorin/Hackathon/node_modules/vite/dist/node/index.js";
import vue from "file:///mnt/d/DevDrive/Zorin/Hackathon/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { imagetools } from "file:///mnt/d/DevDrive/Zorin/Hackathon/node_modules/vite-imagetools/dist/index.js";
import { viteObfuscateFile } from "file:///mnt/d/DevDrive/Zorin/Hackathon/node_modules/vite-plugin-obfuscator/index.js";
var vite_config_default = defineConfig({
  define: {
    "process.env": process.env
  },
  plugins: [
    vue(),
    imagetools(),
    viteObfuscateFile({
      globalOptions: {
        compact: true
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        }
      }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL21udC9kL0RldkRyaXZlL1pvcmluL0hhY2thdGhvblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9kL0RldkRyaXZlL1pvcmluL0hhY2thdGhvbi92aXRlLmNvbmZpZy5tanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9kL0RldkRyaXZlL1pvcmluL0hhY2thdGhvbi92aXRlLmNvbmZpZy5tanNcIjtpbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHtpbWFnZXRvb2xzfSBmcm9tICd2aXRlLWltYWdldG9vbHMnXG5pbXBvcnQge3ZpdGVPYmZ1c2NhdGVGaWxlfSBmcm9tICd2aXRlLXBsdWdpbi1vYmZ1c2NhdG9yJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgZGVmaW5lOiB7XG4gICAgICAgICdwcm9jZXNzLmVudic6IHByb2Nlc3MuZW52XG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIHZ1ZSgpLCBpbWFnZXRvb2xzKCksXG4gICAgICAgIHZpdGVPYmZ1c2NhdGVGaWxlKHtcbiAgICAgICAgICAgIGdsb2JhbE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjb21wYWN0OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmluZDogL15+LisvLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50OiAodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwucmVwbGFjZSgvXn4vLCBcIlwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVIsU0FBUSxvQkFBbUI7QUFDNVMsT0FBTyxTQUFTO0FBQ2hCLFNBQVEsa0JBQWlCO0FBQ3pCLFNBQVEseUJBQXdCO0FBR2hDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFFBQVE7QUFBQSxJQUNKLGVBQWUsUUFBUTtBQUFBLEVBQzNCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxJQUFJO0FBQUEsSUFBRyxXQUFXO0FBQUEsSUFDbEIsa0JBQWtCO0FBQUEsTUFDZCxlQUFlO0FBQUEsUUFDWCxTQUFTO0FBQUEsTUFDYjtBQUFBLElBQ0osQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNIO0FBQUEsUUFDSSxNQUFNO0FBQUEsUUFDTixhQUFhLENBQUMsUUFBUTtBQUNsQixpQkFBTyxJQUFJLFFBQVEsTUFBTSxFQUFFO0FBQUEsUUFDL0I7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
