import supabase from '@/config/supabaseClient';

export default defineNuxtRouteMiddleware(async () => {
  const supabaseToken = useCookie('supabaseToken');
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!supabaseToken.value && !user) {
    return navigateTo('/login');
  }
});
