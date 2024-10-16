import React, { type FC } from 'react';
import {
  WixDesignSystemProvider,
  Card,
  Text,
  Box,
  EmptyState,
  TextButton,
} from '@wix/design-system';
import '@wix/design-system/styles.global.css';

interface Props {
  staffResourceId: string;
  scheduleId: string;
  timezone: string;
}

const Plugin: FC<Props> = ({ staffResourceId, scheduleId, timezone }) => {
  return (
    <WixDesignSystemProvider features={{ newColorsBranding: true }}>
      <Card>
        <Card.Header
          title="Dashboard Plugin"
          subtitle={
            <Box direction="horizontal" gap="1">
              <Text secondary>This is your dashboard plugin.</Text>
              <TextButton as="a" href="https://wix.to/dFFuEki" target="_blank">
                Learn more
              </TextButton>
            </Box>
          }
        />
        <Card.Divider />
        <Card.Content size="medium">
          <EmptyState
            theme="section"
            title="Here is some content"
            subtitle="Replace this with your own code"
          />
        </Card.Content>
      </Card>
    </WixDesignSystemProvider>
  );
};

export default Plugin;
