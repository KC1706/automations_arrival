// Generated script for workflow e031207a-8ee5-4b76-8827-6d69e81b4026
// Generated at 2025-08-25T18:05:19.101Z

import { Stagehand } from "@browserbasehq/stagehand";
import { z } from 'zod';
import StagehandConfig from "./stagehand.config.js";

// Helper function to calculate date range
function calculateDateRange(): { startDate: string, endDate: string } {
  const today = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() - 30);
  
  // Format dates as DD/MM/YYYY for the date inputs
  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return {
    startDate: formatDate(thirtyDaysAgo),
    endDate: formatDate(today)
  };
}

// Stagehand configuration

async function runWorkflow() {
  let stagehand: Stagehand | null = null;

  try {
    // Calculate dynamic date range
    const dateRange = calculateDateRange();
    console.log(`Calculated date range: ${dateRange.startDate} to ${dateRange.endDate} (30 days from today)`);

    // Initialize Stagehand
    console.log('Initializing Stagehand...');
    stagehand = new Stagehand(StagehandConfig);
    await stagehand.init();
    console.log('Stagehand initialized successfully.');

    // Get the page instance
    const page = stagehand.page;
    if (!page) {
      throw new Error('Failed to get page instance from Stagehand');
    }

    const variables = {
      input_e03120_1: 'ecrinnresort@gmail.com',
      input_e03120_2: 'Ecrinn@2025',
      input_e03120_3: '30',
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
    };

    // Step 1: Navigate to URL
    console.log('Navigating to: https://app.stayflexi.com/reports/master');
    await page.goto('https://app.stayflexi.com/reports/master');

    // Step 2: Perform action
    console.log(
      `Performing action: type ${variables.input_e03120_1} into the email input`,
    );
    await page.act(`type ${variables.input_e03120_1} into the email input`);

    // Step 3: Perform action
    console.log(`Performing action: click the Sign In button`);
    await page.act(`click the Sign In button`);

    // Step 4: Login action - only execute if no contextId

    // Step 4: Perform action
    console.log(
      `Performing action: type ${variables.input_e03120_2} into the password input`,
    );
    await page.act(`type ${variables.input_e03120_2} into the password input`);

    // Step 5: Perform action
    console.log(`Performing action: click the SIGN IN button`);
    await page.act(`click the SIGN IN button`);

    // Step 6: Perform action
    console.log(`Performing action: click the Go to dashboard button`);
    await page.act(`click the Go to dashboard button`);

    // Step 7: Perform action
    console.log(
      `Performing action: click the Layout-4-blocks icon (More apps button)`,
    );
    await page.act(`click the Layout-4-blocks icon (More apps button)`);

    // Step 8: Navigate to URL
    console.log(
      'Navigating to: https://app.stayflexi.com/reports?hotelId=31508',
    );
    await page.goto('https://app.stayflexi.com/reports?hotelId=31508');

    // Step 9: Perform action
    console.log(`Performing action: click the Master report card`);
    await page.act(`click the Master report card`);

    // Step 10: Perform action
    console.log(
      `Performing action: click the date range selector showing "${dateRange.startDate} - ${dateRange.endDate}"`,
    );
    await page.act(`click the date range selector showing "${dateRange.startDate} - ${dateRange.endDate}"`);

    // Step 11: Perform action
    console.log(
      `Performing action: type ${variables.input_e03120_3} into the 'days starting today' input field`,
    );
    await page.act(`type ${variables.input_e03120_3} into the 'days starting today' input field`);

    // Step 12: Perform action
    console.log(`Performing action: click the Apply button`);
    await page.act(`click the Apply button`);

    // Step 13: Perform action
    console.log(`Performing action: click the Checkout Date dropdown`);
    await page.act(`click the Checkout Date dropdown`);

    // Step 14: Perform action
    console.log(`Performing action: click the Booking Made Date option`);
    await page.act(`click the Booking Made Date option`);

    // Step 15: Perform action
    console.log(`Performing action: click the Generate report button`);
    await page.act(`click the Generate report button`);

    // Step 16: Perform action
    console.log(`Performing action: click the Export report button`);
    await page.act(`click the Export report button`);

    // Step 17: Perform action
    console.log(`Performing action: click the Export as Excel option`);
    await page.act(`click the Export as Excel option`);

    // Step 18: Perform action
    console.log(`Performing action: click outside the dropdown to close it`);
    await page.act(`click outside the dropdown to close it`);

    console.log('Workflow completed successfully');
    return { success: true };
  } catch (error) {
    console.error('Workflow failed:', error);
    return { success: false, error };
  } finally {
    // Clean up
    if (stagehand) {
      console.log('Closing Stagehand connection.');
      try {
        await stagehand.close();
      } catch (err) {
        console.error('Error closing Stagehand:', err);
      }
    }
  }
}

// Single execution
runWorkflow().then((result) => {
  console.log('Execution result:', result);
  process.exit(result.success ? 0 : 1);
});

runWorkflow();