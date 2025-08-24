// Generated script for workflow 6b2b83d7-33c2-44f9-bba4-cc55fe0ea5b6
// Generated at 2025-08-24T16:56:14.671Z

import { Stagehand } from "@browserbasehq/stagehand";
import { z } from 'zod';
import StagehandConfig from "./stagehand.config.js";

// Utility function to add delays between API calls to stay within rate limits
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to calculate 90-day date range from current date
function calculateDateRange(): { startDate: string, endDate: string } {
  const today = new Date();
  const endDate = new Date(today);
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 90);
  
  // Format dates as DD/MM/YYYY (UK format)
  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  
  return {
    startDate: formatDate(startDate),
    endDate: formatDate(endDate)
  };
}

// Rate limiting strategy: Google AI free tier allows 15 requests per minute
// We'll use 5-second delays to ensure we stay well under the limit
const RATE_LIMIT_DELAY = 5000; // 5 seconds between actions
const EXTENDED_DELAY = 15000; // 15 seconds after every 5 actions for API recovery

// Stagehand configuration

async function runWorkflow() {
  let stagehand: Stagehand | null = null;

  try {
    // Calculate 90-day date range
    const dateRange = calculateDateRange();
    console.log(`Calculated date range: ${dateRange.startDate} to ${dateRange.endDate} (90 days from today)`);

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
      input_6b2b83_1: 'Arival@munjoh.com',
      input_6b2b83_2: 'Hlmor@2025',
      input_6b2b83_3: '31572',
      input_6b2b83_7: 'Hlmor@2025',
      input_6b2b83_8: 'Hlmor@2025',
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
    };

    // Step 1: Navigate to URL
    console.log('Navigating to: https://live.ipms247.com/rcm/#/crsbookings');
    await page.goto('https://live.ipms247.com/rcm/#/crsbookings');

    // Step 2: Perform action
    console.log(
      `Performing action: type ${variables.input_6b2b83_1} into the Username field`,
    );
    await page.act(`type ${variables.input_6b2b83_1} into the Username field`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 3: Perform action
    console.log(
      `Performing action: type ${variables.input_6b2b83_2} into the Password field`,
    );
    await page.act(`type ${variables.input_6b2b83_2} into the Password field`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 4: Perform action
    console.log(
      `Performing action: type ${variables.input_6b2b83_3} into the Property Code field`,
    );
    await page.act(`type ${variables.input_6b2b83_3} into the Property Code field`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 5: Perform action
    console.log(`Performing action: click the SIGN IN button`);
    await page.act(`click the SIGN IN button`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 6: Perform action
    console.log(`Performing action: click the Channel Manager Extranet button`);
    await page.act(`click the Channel Manager Extranet button`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 7: Perform action
    console.log(`Performing action: click the Arival@munjoh.com option`);
    await page.act(`click the Arival@munjoh.com option`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 8: Login action - only execute if no contextId

    // Step 8: Perform action
    console.log(`Performing action: type ${variables.input_6b2b83_2} into the Password field`);
    await page.act(`type ${variables.input_6b2b83_2} into the Password field`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 9: Perform action
    console.log(`Performing action: click the SIGN IN button`);
    await page.act(`click the SIGN IN button`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 10: Perform action
    console.log(`Performing action: click the Channel Manager Extranet button`);
    await page.act(`click the Channel Manager Extranet button`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 11: Login action - only execute if no contextId

    // Step 11: Perform action
    console.log(`Performing action: type ${variables.input_6b2b83_7} into the password textbox`);
    await page.act(`type ${variables.input_6b2b83_7} into the password textbox`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 12: Perform action
    console.log(`Performing action: click the UNLOCK button`);
    await page.act(`click the UNLOCK button`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 13: Perform action
    console.log(`Performing action: click the menu button in the top left`);
    await page.act(`click the menu button in the top left`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 14: Perform action
    console.log(`Performing action: click the View bookings list button`);
    await page.act(`click the View bookings list button`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 15: Perform action
    console.log(`Performing action: click the FILTER button`);
    await page.act(`click the FILTER button`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 16: Perform action - Enter start date
    console.log(`Performing action: click the From date textbox`);
    await page.act(`click the From date textbox`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 17: Perform action - Type start date
    console.log(
      `Performing action: type ${variables.startDate} into the From date field`,
    );
    await page.act(`type ${variables.startDate} into the From date field`);
    
    // Alternative approach: Try to fill the field directly
    try {
      console.log('Attempting alternative date input method...');
      await page.act(`fill the From date field with ${variables.startDate}`);
    } catch (error) {
      console.log('Alternative method failed, continuing with primary method...');
    }
    
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 18: Perform action - Enter end date
    console.log(`Performing action: click the To date textbox`);
    await page.act(`click the To date textbox`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 19: Perform action - Type end date
    console.log(
      `Performing action: type ${variables.endDate} into the To date field`,
    );
    await page.act(`type ${variables.endDate} into the To date field`);
    
    // Alternative approach: Try to fill the field directly
    try {
      console.log('Attempting alternative date input method...');
      await page.act(`fill the To date field with ${variables.endDate}`);
    } catch (error) {
      console.log('Alternative method failed, continuing with primary method...');
    }
    
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 20: Perform action
    console.log(`Performing action: click the SEARCH button`);
    await page.act(`click the SEARCH button`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 21: Perform action
    console.log(`Performing action: click the Export button`);
    await page.act(`click the Export button`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 22: Perform action
    console.log(`Performing action: click the Select all fields checkbox`);
    await page.act(`click the Select all fields checkbox`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 23: Perform action
    console.log(`Performing action: click the Extra Charges checkbox`);
    await page.act(`click the Extra Charges checkbox`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 24: Perform action
    console.log(`Performing action: click the Tax Inclusive checkbox`);
    await page.act(`click the Tax Inclusive checkbox`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

    // Step 25: Perform action
    console.log(`Performing action: click the EXPORT button`);
    await page.act(`click the EXPORT button`);
    console.log('Waiting 5 seconds to stay within API rate limits...');
    await delay(RATE_LIMIT_DELAY);

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