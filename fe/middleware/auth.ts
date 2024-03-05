export default defineNuxtRouteMiddleware(() => {
  const supabaseToken = useCookie('supabaseToken');

  if (!supabaseToken.value) {
    return navigateTo('/login');
  }
});
