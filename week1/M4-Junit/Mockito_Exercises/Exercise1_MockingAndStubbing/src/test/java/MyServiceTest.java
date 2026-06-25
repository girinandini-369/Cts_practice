import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

class ExternalApi {
    String getData() {
        return "real data";
    }
}

class MyService {
    private final ExternalApi api;

    MyService(ExternalApi api) {
        this.api = api;
    }

    String fetchData() {
        return api.getData();
    }
}

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Step 1: Create mock
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Stub method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Inject mock into service
        MyService service = new MyService(mockApi);

        // Step 4: Call method
        String result = service.fetchData();

        // Step 5: Verify output
        assertEquals("Mock Data", result);
    }
}