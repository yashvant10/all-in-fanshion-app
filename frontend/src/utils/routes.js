import LandingPage from '../pages/auth/LandingPage';
import LoginPage from '../pages/auth/LoginPage';
import SignupPage from '../pages/auth/SignupPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import OnboardingPage from '../pages/auth/OnboardingPage';
import StyleSetupPage from '../pages/auth/StyleSetupPage';
import DashboardPage from '../pages/core/DashboardPage';
import OverviewPage from '../pages/core/OverviewPage';
import StyleScorePage from '../pages/core/StyleScorePage';
import RecommendationsPage from '../pages/core/RecommendationsPage';
import UploadPhotoPage from '../pages/core/UploadPhotoPage';
import AIScanPage from '../pages/core/AIScanPage';
import AIResultsPage from '../pages/core/AIResultsPage';
import OutfitSuggestionsPage from '../pages/core/OutfitSuggestionsPage';
import StyleExplanationPage from '../pages/core/StyleExplanationPage';
import MyClosetPage from '../pages/user/MyClosetPage';
import AddItemPage from '../pages/user/AddItemPage';
import SavedOutfitsPage from '../pages/user/SavedOutfitsPage';
import OutfitDetailsPage from '../pages/user/OutfitDetailsPage';
import HistoryPage from '../pages/user/HistoryPage';
import OutfitPlannerPage from '../pages/user/OutfitPlannerPage';
import AIChatStylistPage from '../pages/ai/AIChatStylistPage';
import AIStyleLabPage from '../pages/ai/AIStyleLabPage';
import VirtualTryOnPage from '../pages/tryon/VirtualTryOnPage';
import TryFitStudioPage from '../pages/tryon/TryFitStudioPage';
import CommunityFeedPage from '../pages/social/CommunityFeedPage';
import ExplorePage from '../pages/social/ExplorePage';
import AIReelsPage from '../pages/social/AIReelsPage';
import PricingPage from '../pages/business/PricingPage';
import SubscriptionPage from '../pages/business/SubscriptionPage';
import PaymentPage from '../pages/business/PaymentPage';
import ProfilePage from '../pages/settings/ProfilePage';
import SettingsPage from '../pages/settings/SettingsPage';
import NotificationsPage from '../pages/settings/NotificationsPage';
import PrivacyPage from '../pages/settings/PrivacyPage';
import AdminDashboardPage from '../pages/admin/AdminDashboardPage';
import UserManagementPage from '../pages/admin/UserManagementPage';
import AIAnalyticsPage from '../pages/admin/AIAnalyticsPage';
import SubscriptionManagementPage from '../pages/admin/SubscriptionManagementPage';

export const routes = [
  ['/', LandingPage], ['/login', LoginPage], ['/signup', SignupPage], ['/forgot-password', ForgotPasswordPage], ['/onboarding', OnboardingPage], ['/style-setup', StyleSetupPage],
  ['/dashboard', DashboardPage], ['/overview', OverviewPage], ['/style-score', StyleScorePage], ['/recommendations', RecommendationsPage], ['/upload-photo', UploadPhotoPage], ['/ai-scan', AIScanPage], ['/ai-results', AIResultsPage], ['/outfit-suggestions', OutfitSuggestionsPage], ['/style-explanation', StyleExplanationPage],
  ['/my-closet', MyClosetPage], ['/add-item', AddItemPage], ['/saved-outfits', SavedOutfitsPage], ['/outfit-details', OutfitDetailsPage], ['/history', HistoryPage], ['/outfit-planner', OutfitPlannerPage],
  ['/ai-chat-stylist', AIChatStylistPage], ['/ai-style-lab', AIStyleLabPage],
  ['/virtual-try-on', VirtualTryOnPage], ['/tryfit-studio', TryFitStudioPage],
  ['/community-feed', CommunityFeedPage], ['/explore', ExplorePage], ['/ai-reels', AIReelsPage],
  ['/pricing', PricingPage], ['/subscription', SubscriptionPage], ['/payment', PaymentPage],
  ['/profile', ProfilePage], ['/settings', SettingsPage], ['/notifications', NotificationsPage], ['/privacy', PrivacyPage],
  ['/admin-dashboard', AdminDashboardPage], ['/user-management', UserManagementPage], ['/ai-analytics', AIAnalyticsPage], ['/subscription-management', SubscriptionManagementPage],
];
