<p align="center">
    <img src="https://github.com/OysterD3/formex/assets/7383278/efa6a70e-c9a4-458e-a41e-2b65603a59f9" alt="formex logo" height="130">
</p>

# Formex
<p>
  <a href="https://www.npmjs.com/package/@formex/builder-react" target="\_parent"><img src="https://badgen.net/npm/v/@formex/builder-react" alt="Latest published version"></a>
  <a href="https://bundlephobia.com/package/@formex/builder-react@latest" target="\_parent"><img src="https://badgen.net/bundlephobia/minzip/@formex/builder-react" alt="Bundlephobia"></a>
  <a href="https://bundlephobia.com/package/@formex/builder-react@latest" target="\_parent"><img src="https://badgen.net/bundlephobia/tree-shaking/@formex/builder-react" alt="Tree shaking available"></a>
  <a href="https://github.com/OysterD3/formex" target="\_parent"><img src="https://badgen.net/npm/types/@formex/builder-react" alt="Types included"></a>
  <a href="https://www.npmjs.com/package/@formex/builder-react" target="\_parent"><img src="https://badgen.net/npm/license/@formex/builder-react" alt="License"></a>
  <a href="https://www.npmjs.com/package/@formex/builder-react" target="\_parent"><img src="https://badgen.net/npm/dt/@formex/builder-react" alt="Number of downloads"></a>
  <a href="https://github.com/OysterD3/formex" target="\_parent"><img src="https://img.shields.io/github/stars/OysterD3/formex.svg?style=social&amp;label=Star" alt="GitHub Stars"></a>
</p>
A headless form builder that allows you to create form builder for your SaaS product at ease.

## Installation
**Form Builder**
```bash
npm install @formex/builder-react
# or
yarn add @formex/builder-react
# or
pnpm add @formex/builder-react
```
**Form Renderer**
```bash
npm install @formex/renderer-react
# or
yarn add @formex/renderer-react
# or
pnpm add @formex/renderer-react
```

## Usage
View example with MUI [GitHub](https://github.com/OysterD3/formex/tree/main/examples/react) | [Stackblitz](https://stackblitz.com/edit/formex-react-mui)

## Available components
### `<FormexProvider />`
A provider to provide the formex context to the children. It's required to wrap the `Formex`'s components with `FormexProvider` to make the formex builder work.

**Props**

| Name            | Type                                                                                  | Default     | Description                                                                                                                                                                                                                                                                               |
|-----------------|---------------------------------------------------------------------------------------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `children`*     | `React.ReactNode`                                                                     | `undefined` | The children to be rendered                                                                                                                                                                                                                                                               |
| `configs`*      | `Configs<TElements>`                                                                  | `undefined` | The configs for formex. View types [here](https://github.com/OysterD3/formex/blob/eb8ff32602943e3f7cd97c6ae77e5ce1d0351678/packages/builder-react/src/types/formex.ts#L30)                                                                                                                |
| `zodSchema`     | `ZodSchema`                                                                           | `undefined` | The [zod schema](https://zod.dev/) for form builder validation (It's not for the renderer). We use [react-hook-form](https://react-hook-form.com/) under the hood.                                                                                                                        |
| `onSave`        | `(onValid: FormexFormValues<TElements>, onInvalid?: Record<string, unknown>) => void` | `undefined` | The function to be called when the form is saved. Which will trigger the `react-hook-form` validation as well. View the `FormexFormValues<TElements>` type [here](https://github.com/OysterD3/formex/blob/eb8ff32602943e3f7cd97c6ae77e5ce1d0351678/packages/core/src/types/formex.ts#L39) |
| `defaultValues` | `FormexFormValues<TElements>`                                                         | `undefined` | The default values for the form. View the type [here](https://github.com/OysterD3/formex/blob/eb8ff32602943e3f7cd97c6ae77e5ce1d0351678/packages/core/src/types/formex.ts#L39)                                                                                                             |

### `<ConfigurationPanel />`

A configuration panel to configure each of the form elements' props.

**Props**

| Name        | Type                                                           | Default     | Description                                                        |
|-------------|----------------------------------------------------------------|-------------|--------------------------------------------------------------------|
| `onRemove`  | `(index: number) => void`                                      | `undefined` | The function to be called when the element is removed              |
| `container` | `React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>` | `undefined` | The container for the configuration panel                          |
| `wrapper`   | `React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>` | `undefined` | The wrapper for each input elements within the configuration panel |

### `<Editor />`

An editor to edit the form elements. Which allows you to drag and drop the elements from `<ElementPicker />`. and drag the `dragHandler` to reorder the elements.

**Props**

| Name          | Type                                                           | Default     | Description                                                                                                            |
|---------------|----------------------------------------------------------------|-------------|------------------------------------------------------------------------------------------------------------------------|
| `container`   | `React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>` | `undefined` | The container for the editor                                                                                           |
| `wrapper`     | `React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>` | `undefined` | The wrapper for the each input elements within the editor                                                              |
| `dragHandler` | `React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>` | `undefined` | The drag handler for each input elements within the editor. We are using [dnd-kit](https://dndkit.com/) under the hood |

### `<ElementPicker />`

An element picker to pick the form elements to be added to the form builder.

**Props**

| Name        | Type                                                           | Default     | Description                                                   |
|-------------|----------------------------------------------------------------|-------------|---------------------------------------------------------------|
| `container` | `React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>` | `undefined` | The container for the element picker                          |
| `wrapper`   | `React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>` | `undefined` | The wrapper for each input elements within the element picker |
