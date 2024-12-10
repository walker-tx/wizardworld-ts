<!-- Start SDK Example Usage [usage] -->
```typescript
import { WizardWorld } from "wizard-world";

const wizardWorld = new WizardWorld();

async function run() {
  const result = await wizardWorld.elixirs.getElixirs({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->