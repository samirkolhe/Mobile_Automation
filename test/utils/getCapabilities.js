import UAT_ANDROID from '../../config/env_UAT/uat.android.capabilities.json' with { type: 'json' };
import UAT_IOS from '../../config/env_UAT/uat.ios.capabilities.json' with { type: 'json' };
import TEST_ANDROID from '../../config/env_Test/test.android.capabilities.json' with { type: 'json' };
import TEST_IOS from '../../config/env_Test/test.android.capabilities.json' with { type: 'json' };

export function getCapabilities(testEnv, device) {
  let selectedCapabilities;

  switch (`${testEnv}_${device}`) {
    case 'UAT_ANDROID':
      selectedCapabilities = UAT_ANDROID;
      break;
    case 'UAT_IOS':
      selectedCapabilities = UAT_IOS;
      break;
    case 'TEST_ANDROID':
      selectedCapabilities = TEST_ANDROID;
      break;
    case 'TEST_IOS':
      selectedCapabilities = TEST_IOS;
      break;
    default:
      throw new Error(
        `No capabilities found for ENV: ${testEnv} and DEVICE: ${device}`,
      );
  }

  return selectedCapabilities;
}
