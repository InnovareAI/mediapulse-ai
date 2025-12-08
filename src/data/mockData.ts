export const channelData = [
  { name: 'Google Ads', spend: 847500, impressions: 42400000, cpm: 20.00, cpc: 0.67, ctr: 3.0, conversions: 18200, roi: 4.2, color: '#4285F4' },
  { name: 'Meta Ads', spend: 623400, impressions: 89100000, cpm: 7.00, cpc: 0.35, ctr: 2.0, conversions: 12500, roi: 3.8, color: '#1877F2' },
  { name: 'TikTok', spend: 312000, impressions: 52000000, cpm: 6.00, cpc: 0.40, ctr: 1.5, conversions: 5200, roi: 2.9, color: '#000000' },
  { name: 'LinkedIn', spend: 234500, impressions: 4700000, cpm: 50.00, cpc: 2.00, ctr: 2.5, conversions: 2300, roi: 2.1, color: '#0A66C2' },
  { name: 'Programmatic', spend: 456800, impressions: 152300000, cpm: 3.00, cpc: 0.50, ctr: 0.6, conversions: 8000, roi: 3.4, color: '#7C3AED' },
  { name: 'EHR Marketing', spend: 185000, impressions: 3700000, cpm: 50.00, cpc: 2.50, ctr: 2.0, conversions: 1900, roi: 3.1, color: '#10B981' },
  { name: 'Medscape', spend: 275000, impressions: 5500000, cpm: 50.00, cpc: 2.50, ctr: 2.0, conversions: 2500, roi: 2.8, color: '#F59E0B' },
  { name: 'Sermo', spend: 142000, impressions: 2100000, cpm: 66.67, cpc: 3.33, ctr: 2.0, conversions: 1100, roi: 2.5, color: '#EF4444' },
  { name: 'YouTube (Pharma)', spend: 198000, impressions: 19800000, cpm: 10.00, cpc: 0.50, ctr: 2.0, conversions: 2400, roi: 3.2, color: '#FF0000' },
  { name: 'Fierce Pharma', spend: 95000, impressions: 1900000, cpm: 50.00, cpc: 2.00, ctr: 2.5, conversions: 855, roi: 2.4, color: '#6366F1' },
  { name: 'Medical Marketing', spend: 168000, impressions: 4200000, cpm: 40.00, cpc: 2.00, ctr: 2.0, conversions: 1700, roi: 2.9, color: '#EC4899' },
  { name: 'AI Search (GEO)', spend: 125000, impressions: 6300000, cpm: 20.00, cpc: 0.67, ctr: 3.0, conversions: 1900, roi: 3.8, color: '#14B8A6' },
];

export const spendTrendData = [
  { date: 'Nov 9', spend: 95000, roi: 3.2 },
  { date: 'Nov 11', spend: 102000, roi: 3.4 },
  { date: 'Nov 13', spend: 98000, roi: 3.1 },
  { date: 'Nov 15', spend: 115000, roi: 3.8 },
  { date: 'Nov 17', spend: 108000, roi: 3.5 },
  { date: 'Nov 19', spend: 112000, roi: 3.6 },
  { date: 'Nov 21', spend: 125000, roi: 4.2 },
  { date: 'Nov 23', spend: 118000, roi: 3.9 },
  { date: 'Nov 25', spend: 95000, roi: 3.0 },
  { date: 'Nov 27', spend: 88000, roi: 2.8 },
  { date: 'Nov 29', spend: 135000, roi: 4.5 },
  { date: 'Dec 1', spend: 142000, roi: 4.8 },
  { date: 'Dec 2', spend: 128000, roi: 4.2 },
  { date: 'Dec 3', spend: 118000, roi: 3.8 },
  { date: 'Dec 4', spend: 125000, roi: 4.0 },
  { date: 'Dec 5', spend: 132000, roi: 4.3 },
  { date: 'Dec 6', spend: 128000, roi: 4.1 },
  { date: 'Dec 7', spend: 122000, roi: 3.9 },
  { date: 'Dec 8', spend: 115000, roi: 3.6 },
];

export const forecastData = [
  { month: 'Oct', actual: 980000, forecast: 950000 },
  { month: 'Nov', actual: 1250000, forecast: 1200000 },
  { month: 'Dec', actual: 987000, forecast: 1400000 },
  { month: 'Jan', actual: null, forecast: 1600000 },
  { month: 'Feb', actual: null, forecast: 1800000 },
];

export const campaigns = [
  {
    id: 1,
    name: 'Q4 Holiday Push',
    client: 'RetailCo',
    status: 'on track',
    spent: 312500,
    budget: 450000,
    roi: 4.5,
    pacing: 95,
    endDate: '2024-12-31'
  },
  {
    id: 2,
    name: 'Brand Awareness 2024',
    client: 'TechStart',
    status: 'over pacing',
    spent: 245000,
    budget: 280000,
    roi: 2.8,
    pacing: 118,
    endDate: '2024-12-15'
  },
  {
    id: 3,
    name: 'Product Launch - Series X',
    client: 'GadgetPro',
    status: 'under pacing',
    spent: 198000,
    budget: 520000,
    roi: 3.9,
    pacing: 72,
    endDate: '2024-12-28'
  },
  {
    id: 4,
    name: 'Lead Gen Q4',
    client: 'SaaSFlow',
    status: 'on track',
    spent: 142000,
    budget: 175000,
    roi: 5.2,
    pacing: 102,
    endDate: '2024-12-20'
  },
  {
    id: 5,
    name: 'Retargeting - Cart Abandoners',
    client: 'FashionHub',
    status: 'over pacing',
    spent: 89500,
    budget: 95000,
    roi: 6.1,
    pacing: 108,
    endDate: '2024-12-10'
  },
];

export const attributionModels = [
  { name: 'First Touch', value: 28, color: '#4285F4' },
  { name: 'Last Touch', value: 35, color: '#10B981' },
  { name: 'Linear', value: 22, color: '#F59E0B' },
  { name: 'Time Decay', value: 15, color: '#EF4444' },
];

export const touchpointData = [
  { name: 'Display Ad', value: 18 },
  { name: 'Paid Search', value: 28 },
  { name: 'Social Media', value: 22 },
  { name: 'Email', value: 15 },
  { name: 'Direct', value: 17 },
];

export const channelLift = [
  { name: 'Google Ads', incremental: 2700, lift: 19 },
  { name: 'Meta Ads', incremental: 1900, lift: 22 },
  { name: 'TikTok', incremental: 780, lift: 27 },
  { name: 'LinkedIn', incremental: 352, lift: 17 },
  { name: 'Programmatic', incremental: 1200, lift: 26 },
  { name: 'EHR Marketing', incremental: 278, lift: 14 },
  { name: 'Medscape', incremental: 371, lift: 16 },
  { name: 'Sermo', incremental: 170, lift: 27 },
  { name: 'YouTube (Pharma)', incremental: 356, lift: 25 },
  { name: 'Fierce Pharma', incremental: 128, lift: 25 },
  { name: 'Medical Marketing', incremental: 252, lift: 15 },
  { name: 'AI Search (GEO)', incremental: 281, lift: 11 },
];

export const aiInsights = [
  {
    id: 1,
    title: 'Budget Reallocation Opportunity',
    time: '2 hours ago',
    description: 'Display ROI has declined 8% week-over-week. Reallocating $25K from Display to Paid Search could yield +12% ROI improvement based on historical performance.',
    impact: '+$18.5K projected revenue',
    confidence: 87,
    action: 'Apply Reallocation',
    type: 'opportunity'
  },
  {
    id: 2,
    title: 'Meta CPC Spike Detected',
    time: '4 hours ago',
    description: 'Meta CPC increased 45% overnight across 3 campaigns. This may be due to Q4 competition. Consider adjusting bid strategies or shifting budget.',
    impact: '-$12K potential overspend',
    confidence: 94,
    action: 'Review Campaigns',
    type: 'warning'
  },
  {
    id: 3,
    title: 'Audience Overlap Detected',
    time: '6 hours ago',
    description: 'Campaign A and Campaign B target overlapping audiences (68% overlap). Merging targeting could reduce CPA by 12% and eliminate wasted impressions.',
    impact: '-$8K in redundant spend',
    confidence: 82,
    action: 'Merge Audiences',
    type: 'opportunity'
  },
  {
    id: 4,
    title: 'Programmatic CPM Surge',
    time: '8 hours ago',
    description: 'Programmatic CPMs spiked 32% due to Q4 inventory competition. Consider shifting budget to YouTube TrueView for similar reach at lower cost.',
    impact: 'Save $15K this month',
    confidence: 79,
    action: 'Shift Budget',
    type: 'warning'
  },
];

export const whatIfScenarios = [
  {
    id: 1,
    title: 'Increase Paid Search +20%',
    confidence: 87,
    roiChange: '+15%',
    conversionsChange: '+2,450',
  },
  {
    id: 2,
    title: 'Reduce Display by $25K',
    confidence: 92,
    roiChange: '+8%',
    conversionsChange: '-320',
  },
  {
    id: 3,
    title: 'Shift to Video Ads',
    confidence: 78,
    roiChange: '+22%',
    conversionsChange: '+3,100',
  },
];

export const seasonalityInsights = [
  {
    title: 'Black Friday Week',
    prediction: '+45% conversions expected',
    recommendation: 'Increase budget 30%',
  },
  {
    title: 'Post-Holiday Dip',
    prediction: '-20% engagement expected',
    recommendation: 'Focus on retargeting',
  },
  {
    title: 'Q1 Recovery',
    prediction: 'Steady growth pattern',
    recommendation: 'Maintain current allocation',
  },
];

export const alerts = [
  {
    id: 1,
    type: 'critical',
    title: 'Budget Exceeded',
    message: 'Brand Awareness 2024 campaign has exceeded 100% of budget',
    time: '10 minutes ago',
    campaign: 'Brand Awareness 2024',
  },
  {
    id: 2,
    type: 'warning',
    title: 'Pacing Alert',
    message: 'Retargeting campaign is pacing 8% over target',
    time: '1 hour ago',
    campaign: 'Retargeting - Cart Abandoners',
  },
  {
    id: 3,
    type: 'info',
    title: 'ROI Improvement',
    message: 'Lead Gen Q4 ROI improved by 15% this week',
    time: '3 hours ago',
    campaign: 'Lead Gen Q4',
  },
  {
    id: 4,
    type: 'warning',
    title: 'CPC Increase',
    message: 'Meta Ads CPC increased 45% in the last 24 hours',
    time: '4 hours ago',
    campaign: 'Multiple',
  },
];

export const integrations = [
  { name: 'Google Ads', status: 'connected', lastSync: '2 minutes ago', icon: 'google' },
  { name: 'Meta Ads', status: 'connected', lastSync: '5 minutes ago', icon: 'meta' },
  { name: 'TikTok Ads', status: 'connected', lastSync: '10 minutes ago', icon: 'tiktok' },
  { name: 'LinkedIn Ads', status: 'connected', lastSync: '15 minutes ago', icon: 'linkedin' },
  { name: 'Google Analytics', status: 'connected', lastSync: '1 minute ago', icon: 'analytics' },
  { name: 'Salesforce', status: 'pending', lastSync: 'Never', icon: 'salesforce' },
  { name: 'HubSpot', status: 'disconnected', lastSync: '7 days ago', icon: 'hubspot' },
];
