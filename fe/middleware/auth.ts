import supabase from '@/config/supabaseClient';

export default defineNuxtRouteMiddleware(async () => {
  const { data } = await supabase.auth.getUser();

  if (!data.user?.id) {
    return navigateTo('/login');
  }
});
