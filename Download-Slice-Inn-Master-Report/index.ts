// Generated script for workflow 08f5138f-0753-4fca-81d5-b7450d8a5a9a
// Generated at 2025-08-24T15:42:07.101Z

import { Stagehand } from "@browserbasehq/stagehand";
import { z } from 'zod';
import StagehandConfig from "./stagehand.config.js";

// Helper function to add delays
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Stagehand configuration

async function runWorkflow() {
  let stagehand: Stagehand | null = null;

  try {
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

    // Calculate dates dynamically: start date = 30 days before today, end date = today
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);
    
    // Format dates as MM/DD/YY for the date inputs
    const formatDate = (date: Date) => {
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const year = date.getFullYear().toString().slice(-2);
      return `${month}/${day}/${year}`;
    };

    const variables = {
      input_08f513_1: 'madhur@sliceinn.in',
      input_08f513_2: 'Madhur-d00',
      input_08f513_4: formatDate(thirtyDaysAgo), // 30 days before today
      input_08f513_5: formatDate(today), // today
    };

    console.log(`Date range: ${variables.input_08f513_4} to ${variables.input_08f513_5}`);

    // Step 1: Navigate to URL
    console.log('Navigating to: https://appsmith.stayflexi.com/user/login');
    await page.goto('https://appsmith.stayflexi.com/user/login');
    await sleep(2000); // Wait for page to load

    // Step 2: Perform action
    console.log(
      `Performing action: type ${variables.input_08f513_1} into the email input`,
    );
    await page.act(`type ${variables.input_08f513_1} into the email input`);
    await sleep(1000); // Wait between actions

    // Step 3: Perform action
    console.log(
      `Performing action: type ${variables.input_08f513_2} into the password input`,
    );
    await page.act(`type ${variables.input_08f513_2} into the password input`);
    await sleep(1000); // Wait between actions

    // Step 4: Perform action
    console.log(`Performing action: click the Sign in button`);
    await page.act(`click the Sign in button`);
    await sleep(3000); // Wait for login to complete

    // Step 5: Perform action
    console.log(
      `Performing action: click the slice-inn-group-report workspace`,
    );
    await page.act(`click the slice-inn-group-report workspace`);
    await sleep(3000); // Wait for workspace to load

    // Step 6: Perform action
    console.log(`Performing action: click the MasterReport application`);
    try {
      await page.act(`click the MasterReport application`);
    } catch (error) {
      if (error.message.includes('429') || error.message.includes('rate limit')) {
        console.log('Rate limit detected. Waiting 60 seconds before retrying...');
        await sleep(60000); // Wait 60 seconds for rate limit to reset
        console.log('Retrying to click the MasterReport application...');
        await page.act(`click the MasterReport application`);
      } else {
        throw error;
      }
    }
    await sleep(3000); // Wait for application to load

    // Step 6.5: Click the Launch button
    console.log(`Performing action: click the Launch button`);
    await page.act(`click the Launch button`);
    await sleep(3000); // Wait for application to fully load

    // Step 7: Perform action
    console.log(
      `Performing action: type ${variables.input_08f513_4} into the start date field`,
    );
    await page.act(`type ${variables.input_08f513_4} into the start date field`);
    await sleep(1000); // Wait between actions

    // Step 8: Perform action
    console.log(
      `Performing action: type ${variables.input_08f513_5} into the end date field`,
    );
    await page.act(`type ${variables.input_08f513_5} into the end date field`);
    await sleep(1000); // Wait between actions

    // Step 9: Perform action
    console.log(`Performing action: click the filter dropdown`);
    await page.act(`click the filter dropdown`);
    await sleep(1000); // Wait between actions

    // Step 10: Perform action
    console.log(`Performing action: click the Booking Made On option`);
    await page.act(`click the Booking Made On option`);
    await sleep(1000); // Wait between actions

    // Step 11: Perform action
    console.log(`Performing action: click the Submit button`);
    await page.act(`click the Submit button`);
    await sleep(3000); // Wait for data to load

    // Step 12: Perform action
    console.log(`Performing action: click the Download button`);
    await page.act(`click the Download button`);
    await sleep(2000); // Wait for download to start

    console.log('Workflow completed successfully');
    return { success: true };
  } catch (error) {
    console.error('Workflow failed:', error);
    
    // If it's a rate limit error, wait longer and retry
    if (error.message.includes('429') || error.message.includes('rate limit')) {
      console.log('Rate limit error detected. Waiting 2 minutes before retrying...');
      await sleep(120000); // Wait 2 minutes
      console.log('Retrying workflow...');
      return await runWorkflow(); // Retry the entire workflow
    }
    
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